import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CRX0RPvB.mjs';
import { manifest } from './manifest_BIhMe8ub.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about/basic-info.astro.mjs');
const _page2 = () => import('./pages/about/innovation.astro.mjs');
const _page3 = () => import('./pages/about/quality.astro.mjs');
const _page4 = () => import('./pages/about/transparency.astro.mjs');
const _page5 = () => import('./pages/about.astro.mjs');
const _page6 = () => import('./pages/achievements.astro.mjs');
const _page7 = () => import('./pages/admin.astro.mjs');
const _page8 = () => import('./pages/api/agreements/_id_.astro.mjs');
const _page9 = () => import('./pages/api/agreements.astro.mjs');
const _page10 = () => import('./pages/api/assign-supervisor.astro.mjs');
const _page11 = () => import('./pages/api/auth/login.astro.mjs');
const _page12 = () => import('./pages/api/auth/logout.astro.mjs');
const _page13 = () => import('./pages/api/auth/me.astro.mjs');
const _page14 = () => import('./pages/api/auth/reset-admin.astro.mjs');
const _page15 = () => import('./pages/api/auth/seed.astro.mjs');
const _page16 = () => import('./pages/api/dashboard/expenses.astro.mjs');
const _page17 = () => import('./pages/api/dashboard/reports.astro.mjs');
const _page18 = () => import('./pages/api/imports/_id_.astro.mjs');
const _page19 = () => import('./pages/api/imports.astro.mjs');
const _page20 = () => import('./pages/api/installments/bulk-create.astro.mjs');
const _page21 = () => import('./pages/api/installments/bulk-delete.astro.mjs');
const _page22 = () => import('./pages/api/installments/bulk-update.astro.mjs');
const _page23 = () => import('./pages/api/installments/create.astro.mjs');
const _page24 = () => import('./pages/api/installments/notifications.astro.mjs');
const _page25 = () => import('./pages/api/installments/update.astro.mjs');
const _page26 = () => import('./pages/api/installments.astro.mjs');
const _page27 = () => import('./pages/api/items/_id_.astro.mjs');
const _page28 = () => import('./pages/api/items.astro.mjs');
const _page29 = () => import('./pages/api/project-details/_id_.astro.mjs');
const _page30 = () => import('./pages/api/projects/create.astro.mjs');
const _page31 = () => import('./pages/api/projects/delete.astro.mjs');
const _page32 = () => import('./pages/api/projects/update.astro.mjs');
const _page33 = () => import('./pages/api/projects.astro.mjs');
const _page34 = () => import('./pages/api/remains/_id_.astro.mjs');
const _page35 = () => import('./pages/api/remains.astro.mjs');
const _page36 = () => import('./pages/api/remove-supervisor.astro.mjs');
const _page37 = () => import('./pages/api/updateitem.astro.mjs');
const _page38 = () => import('./pages/api/users/create.astro.mjs');
const _page39 = () => import('./pages/api/users/delete.astro.mjs');
const _page40 = () => import('./pages/api/users/list.astro.mjs');
const _page41 = () => import('./pages/api/users/supervisors.astro.mjs');
const _page42 = () => import('./pages/api/users/update.astro.mjs');
const _page43 = () => import('./pages/api/users/_id_.astro.mjs');
const _page44 = () => import('./pages/contact.astro.mjs');
const _page45 = () => import('./pages/crs/add-contract.astro.mjs');
const _page46 = () => import('./pages/crs/add-project.astro.mjs');
const _page47 = () => import('./pages/crs/archived-projects.astro.mjs');
const _page48 = () => import('./pages/crs/contract-details.astro.mjs');
const _page49 = () => import('./pages/crs/edit-contract.astro.mjs');
const _page50 = () => import('./pages/crs/notifications.astro.mjs');
const _page51 = () => import('./pages/crs/project-installments.astro.mjs');
const _page52 = () => import('./pages/crs/projects/_id_/agreements.astro.mjs');
const _page53 = () => import('./pages/crs/projects/_id_/daily-reports.astro.mjs');
const _page54 = () => import('./pages/crs/projects/_id_/expense-reports.astro.mjs');
const _page55 = () => import('./pages/crs/projects/_id_/items.astro.mjs');
const _page56 = () => import('./pages/crs/projects/_id_/remains.astro.mjs');
const _page57 = () => import('./pages/crs/projects/_id_/suppliers.astro.mjs');
const _page58 = () => import('./pages/crs/projects/_id_.astro.mjs');
const _page59 = () => import('./pages/crs/projects.astro.mjs');
const _page60 = () => import('./pages/crs/users.astro.mjs');
const _page61 = () => import('./pages/crs.astro.mjs');
const _page62 = () => import('./pages/dashboard.astro.mjs');
const _page63 = () => import('./pages/search.astro.mjs');
const _page64 = () => import('./pages/services/commercial-projects.astro.mjs');
const _page65 = () => import('./pages/services/project-management.astro.mjs');
const _page66 = () => import('./pages/services/real-estate-investment.astro.mjs');
const _page67 = () => import('./pages/services/residential-development.astro.mjs');
const _page68 = () => import('./pages/services.astro.mjs');
const _page69 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/about/basic-info.astro", _page1],
    ["src/pages/about/innovation.astro", _page2],
    ["src/pages/about/quality.astro", _page3],
    ["src/pages/about/transparency.astro", _page4],
    ["src/pages/about.astro", _page5],
    ["src/pages/achievements.astro", _page6],
    ["src/pages/admin.astro", _page7],
    ["src/pages/api/agreements/[id].js", _page8],
    ["src/pages/api/agreements/index.js", _page9],
    ["src/pages/api/assign-supervisor.js", _page10],
    ["src/pages/api/auth/login.js", _page11],
    ["src/pages/api/auth/logout.js", _page12],
    ["src/pages/api/auth/me.js", _page13],
    ["src/pages/api/auth/reset-admin.js", _page14],
    ["src/pages/api/auth/seed.js", _page15],
    ["src/pages/api/dashboard/expenses.js", _page16],
    ["src/pages/api/dashboard/reports.js", _page17],
    ["src/pages/api/imports/[id].js", _page18],
    ["src/pages/api/imports/index.js", _page19],
    ["src/pages/api/installments/bulk-create.js", _page20],
    ["src/pages/api/installments/bulk-delete.js", _page21],
    ["src/pages/api/installments/bulk-update.js", _page22],
    ["src/pages/api/installments/create.js", _page23],
    ["src/pages/api/installments/notifications.js", _page24],
    ["src/pages/api/installments/update.js", _page25],
    ["src/pages/api/installments/index.js", _page26],
    ["src/pages/api/items/[id].js", _page27],
    ["src/pages/api/items/index.js", _page28],
    ["src/pages/api/project-details/[id].js", _page29],
    ["src/pages/api/projects/create.js", _page30],
    ["src/pages/api/projects/delete.js", _page31],
    ["src/pages/api/projects/update.js", _page32],
    ["src/pages/api/projects/index.js", _page33],
    ["src/pages/api/remains/[id].js", _page34],
    ["src/pages/api/remains/index.js", _page35],
    ["src/pages/api/remove-supervisor.js", _page36],
    ["src/pages/api/updateItem.js", _page37],
    ["src/pages/api/users/create.js", _page38],
    ["src/pages/api/users/delete.js", _page39],
    ["src/pages/api/users/list.js", _page40],
    ["src/pages/api/users/supervisors.js", _page41],
    ["src/pages/api/users/update.js", _page42],
    ["src/pages/api/users/[id].js", _page43],
    ["src/pages/contact.astro", _page44],
    ["src/pages/crs/add-contract.astro", _page45],
    ["src/pages/crs/add-project.astro", _page46],
    ["src/pages/crs/archived-projects.astro", _page47],
    ["src/pages/crs/contract-details.astro", _page48],
    ["src/pages/crs/edit-contract.astro", _page49],
    ["src/pages/crs/notifications.astro", _page50],
    ["src/pages/crs/project-installments.astro", _page51],
    ["src/pages/crs/projects/[id]/agreements.astro", _page52],
    ["src/pages/crs/projects/[id]/daily-reports.astro", _page53],
    ["src/pages/crs/projects/[id]/expense-reports.astro", _page54],
    ["src/pages/crs/projects/[id]/items.astro", _page55],
    ["src/pages/crs/projects/[id]/remains.astro", _page56],
    ["src/pages/crs/projects/[id]/suppliers.astro", _page57],
    ["src/pages/crs/projects/[id].astro", _page58],
    ["src/pages/crs/projects.astro", _page59],
    ["src/pages/crs/users.astro", _page60],
    ["src/pages/crs.astro", _page61],
    ["src/pages/dashboard/index.astro", _page62],
    ["src/pages/search.astro", _page63],
    ["src/pages/services/commercial-projects.astro", _page64],
    ["src/pages/services/project-management.astro", _page65],
    ["src/pages/services/real-estate-investment.astro", _page66],
    ["src/pages/services/residential-development.astro", _page67],
    ["src/pages/services.astro", _page68],
    ["src/pages/index.astro", _page69]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "mode": "middleware",
    "client": "file:///home/user/Eman-Project/dist/client/",
    "server": "file:///home/user/Eman-Project/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro",
    "experimentalStaticHeaders": false
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
