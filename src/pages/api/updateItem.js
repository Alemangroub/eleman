
import prisma from '../../lib/prisma';

export async function POST({ request }) {
    if (request.headers.get("Content-Type") !== "application/json") {
        return new Response(JSON.stringify({ error: "JSON body expected" }), { status: 415 });
    }

    try {
        const { projectId, itemId, ...updates } = await request.json();

        if (!projectId || !itemId) {
            return new Response(JSON.stringify({ error: "Project ID and Item ID are required" }), { status: 400 });
        }
         if (!updates.name || !updates.personName || !updates.quantity || !updates.unitPrice || !updates.createdAt) {
            return new Response(JSON.stringify({ error: 'يرجى ملء جميع الحقول المطلوبة.' }), { status: 400 });
        }

        const quantity = parseFloat(updates.quantity);
        const unitPrice = parseFloat(updates.unitPrice);

        if (isNaN(quantity) || isNaN(unitPrice)) {
             return new Response(JSON.stringify({ error: 'الكمية وسعر الوحدة يجب أن تكون أرقامًا.' }), { status: 400 });
        }

        const totalPrice = quantity * unitPrice;
        const createdAt = new Date(updates.createdAt);

        const updatedItem = await prisma.item.update({
            where: { id: itemId },
            data: {
                name: updates.name,
                personName: updates.personName,
                quantity: quantity,
                unitPrice: unitPrice,
                totalPrice: totalPrice,
                createdAt: createdAt
            }
        });

        // Format date back to string to match previous expected format
        const finalData = {
            ...updatedItem,
            createdAt: updatedItem.createdAt.toLocaleDateString('en-CA')
        };

        return new Response(JSON.stringify({ 
            success: true, 
            message: 'تم تحديث البند بنجاح!',
            data: finalData 
        }), { status: 200 });

    } catch (error) {
        console.error("Error updating item:", error);
        let errorMessage = "حدث خطأ أثناء تحديث البند في قاعدة البيانات.";
        return new Response(JSON.stringify({ error: errorMessage, details: error.message }), { status: 500 });
    }
}
