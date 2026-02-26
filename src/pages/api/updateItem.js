
// Import both getAdminDb and Timestamp from our central server setup file.
import { getAdminDb, Timestamp } from '../../firebase/server.js';

export async function POST({ request }) {
    if (request.headers.get("Content-Type") !== "application/json") {
        return new Response(JSON.stringify({ error: "JSON body expected" }), { status: 415 });
    }

    try {
        const adminDb = getAdminDb();
        const { projectId, itemId, ...updates } = await request.json();

        if (!projectId || !itemId) {
            return new Response(JSON.stringify({ error: "Project ID and Item ID are required" }), { status: 400 });
        }
         if (!updates.name || !updates.personName || !updates.quantity || !updates.unitPrice || !updates.createdAt) {
            return new Response(JSON.stringify({ error: 'يرجى ملء جميع الحقول المطلوبة.' }), { status: 400 });
        }

        const itemRef = adminDb.collection('projects').doc(projectId).collection('items').doc(itemId);

        const dataToUpdate = { ...updates };

        const quantity = parseFloat(updates.quantity);
        const unitPrice = parseFloat(updates.unitPrice);

        if (isNaN(quantity) || isNaN(unitPrice)) {
             return new Response(JSON.stringify({ error: 'الكمية وسعر الوحدة يجب أن تكون أرقامًا.' }), { status: 400 });
        }

        dataToUpdate.quantity = quantity;
        dataToUpdate.unitPrice = unitPrice;
        dataToUpdate.totalPrice = quantity * unitPrice;
        // Use the Timestamp object we imported from server.js
        dataToUpdate.createdAt = Timestamp.fromDate(new Date(updates.createdAt));

        await itemRef.update(dataToUpdate);

        const updatedDoc = await itemRef.get();
        const finalData = updatedDoc.data();
        
        finalData.createdAt = finalData.createdAt.toDate().toLocaleDateString('en-CA'); 
        finalData.id = updatedDoc.id;

        return new Response(JSON.stringify({ 
            success: true, 
            message: 'تم تحديث البند بنجاح!',
            data: finalData 
        }), { status: 200 });

    } catch (error) {
        console.error("Error updating item:", error);
        let errorMessage = "حدث خطأ أثناء تحديث البند في قاعدة البيانات.";
        if (error.message.includes('Firebase Admin SDK is not available')) {
            errorMessage = 'Firebase Admin SDK initialization failed on the server. Check environment variables.';
        }
        return new Response(JSON.stringify({ error: errorMessage, details: error.message }), { status: 500 });
    }
}
