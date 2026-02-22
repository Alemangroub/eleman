import { d as db } from '../../chunks/admin_CBgMA4DX.mjs';
import { Timestamp } from 'firebase-admin/firestore';
export { renderers } from '../../renderers.mjs';

// Using POST for simplicity as it's the default for Astro form submissions.
async function POST({ request }) {
    // Ensure the request is JSON
    if (request.headers.get("Content-Type") !== "application/json") {
        return new Response(JSON.stringify({ error: "JSON body expected" }), { status: 400 });
    }

    const { projectId, itemId, ...updates } = await request.json();

    if (!projectId || !itemId) {
        return new Response(JSON.stringify({ error: "Project ID and Item ID are required" }), { status: 400 });
    }
     if (!updates.name || !updates.personName || !updates.quantity || !updates.unitPrice || !updates.createdAt) {
        return new Response(JSON.stringify({ error: 'يرجى ملء جميع الحقول المطلوبة.' }), { status: 400 });
    }

    try {
        const itemRef = db.collection('projects').doc(projectId).collection('items').doc(itemId);

        const dataToUpdate = { ...updates };

        // Ensure numeric fields are stored as numbers
        const quantity = parseFloat(updates.quantity);
        const unitPrice = parseFloat(updates.unitPrice);

        if (isNaN(quantity) || isNaN(unitPrice)) {
             return new Response(JSON.stringify({ error: 'الكمية وسعر الوحدة يجب أن تكون أرقامًا.' }), { status: 400 });
        }

        dataToUpdate.quantity = quantity;
        dataToUpdate.unitPrice = unitPrice;

        // Recalculate total price on the server to ensure accuracy
        dataToUpdate.totalPrice = quantity * unitPrice;
        
        // Convert date string back to a Firestore Timestamp
        dataToUpdate.createdAt = Timestamp.fromDate(new Date(updates.createdAt));

        // Atomically update the document
        await itemRef.update(dataToUpdate);

        // Retrieve the fully updated document to send back to the client
        const updatedDoc = await itemRef.get();
        const finalData = updatedDoc.data();
        
        // Convert timestamp back to a user-friendly string format for the client
        finalData.createdAt = finalData.createdAt.toDate().toLocaleDateString('en-CA'); // YYYY-MM-DD
        finalData.id = updatedDoc.id;


        return new Response(JSON.stringify({ 
            success: true, 
            message: 'تم تحديث البند بنجاح!',
            data: finalData 
        }), { status: 200 });

    } catch (error) {
        console.error("Error updating item:", error);
        return new Response(JSON.stringify({ error: 'حدث خطأ أثناء تحديث البند في قاعدة البيانات.' }), { status: 500 });
    }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
