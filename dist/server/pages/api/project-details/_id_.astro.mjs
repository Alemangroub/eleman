import { p as prisma } from '../../../chunks/prisma_DflsjPUV.mjs';
import { b as requireProjectAccess } from '../../../chunks/server-auth_DXOJNl0z.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;

async function GET({ request, params }) {
    const { id } = params;

    if (!id) {
        return new Response(JSON.stringify({ error: "Project ID is required" }), { status: 400 });
    }

    try {
        const { errorResponse } = await requireProjectAccess(request, id);
        if (errorResponse) {
            return errorResponse;
        }

        const project = await prisma.project.findUnique({
            where: { id: id },
            include: {
                supervisors: {
                    include: {
                        user: true
                    }
                },
                dailyExpenses: {
                    where: { isRead: false }
                },
                dailyReports: {
                    where: { isRead: false }
                },
                leftovers: {
                    where: { isRead: false }
                }
            }
        });

        if (!project) {
            return new Response(JSON.stringify({ error: "Project not found" }), { status: 404 });
        }

        const supervisorNames = project.supervisors.map(ps => ps.user.name);

        const projectDetails = { 
            id: project.id, 
            projectName: project.projectName || 'اسم غير متوفر',
            projectAddress: project.projectAddress || 'عنوان غير محدد',
            supervisors: supervisorNames,
            unreadExpenseReports: project.dailyExpenses.length,
            unreadDailyReports: project.dailyReports.length,
            unreadLeftoversReports: project.leftovers.length,
        };

        return new Response(JSON.stringify(projectDetails), { 
            status: 200, 
            headers: { "Content-Type": "application/json" } 
        });

    } catch (error) {
        console.error("API Route Error fetching project details:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error", details: error.message }), { status: 500 });
    }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
