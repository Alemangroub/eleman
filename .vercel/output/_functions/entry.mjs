import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_jwf5ISHI.mjs';
import { manifest } from './manifest_CBOgyELA.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about/basic-info.astro.mjs');
const _page2 = () => import('./pages/about/innovation.astro.mjs');
const _page3 = () => import('./pages/about/quality.astro.mjs');
const _page4 = () => import('./pages/about/transparency.astro.mjs');
const _page5 = () => import('./pages/admin/add-contract.astro.mjs');
const _page6 = () => import('./pages/admin/add-project.astro.mjs');
const _page7 = () => import('./pages/admin/archived-projects.astro.mjs');
const _page8 = () => import('./pages/admin/contract-details.astro.mjs');
const _page9 = () => import('./pages/admin/edit-contract.astro.mjs');
const _page10 = () => import('./pages/admin/notifications.astro.mjs');
const _page11 = () => import('./pages/admin/project-installments.astro.mjs');
const _page12 = () => import('./pages/admin/projects/_id_/daily-reports.astro.mjs');
const _page13 = () => import('./pages/admin/projects/_id_/expense-reports.astro.mjs');
const _page14 = () => import('./pages/admin/projects/_id_/items.astro.mjs');
const _page15 = () => import('./pages/admin/projects/_id_/suppliers.astro.mjs');
const _page16 = () => import('./pages/admin/projects/_id_.astro.mjs');
const _page17 = () => import('./pages/admin/projects.astro.mjs');
const _page18 = () => import('./pages/admin/users.astro.mjs');
const _page19 = () => import('./pages/admin.astro.mjs');
const _page20 = () => import('./pages/api/assign-supervisor.astro.mjs');
const _page21 = () => import('./pages/api/auth/session.astro.mjs');
const _page22 = () => import('./pages/api/remove-supervisor.astro.mjs');
const _page23 = () => import('./pages/api/updateitem.astro.mjs');
const _page24 = () => import('./pages/contact.astro.mjs');
const _page25 = () => import('./pages/dashboard.astro.mjs');
const _page26 = () => import('./pages/search.astro.mjs');
const _page27 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about/basic-info.astro", _page1],
    ["src/pages/about/innovation.astro", _page2],
    ["src/pages/about/quality.astro", _page3],
    ["src/pages/about/transparency.astro", _page4],
    ["src/pages/admin/add-contract.astro", _page5],
    ["src/pages/admin/add-project.astro", _page6],
    ["src/pages/admin/archived-projects.astro", _page7],
    ["src/pages/admin/contract-details.astro", _page8],
    ["src/pages/admin/edit-contract.astro", _page9],
    ["src/pages/admin/notifications.astro", _page10],
    ["src/pages/admin/project-installments.astro", _page11],
    ["src/pages/admin/projects/[id]/daily-reports.astro", _page12],
    ["src/pages/admin/projects/[id]/expense-reports.astro", _page13],
    ["src/pages/admin/projects/[id]/items.astro", _page14],
    ["src/pages/admin/projects/[id]/suppliers.astro", _page15],
    ["src/pages/admin/projects/[id].astro", _page16],
    ["src/pages/admin/projects.astro", _page17],
    ["src/pages/admin/users.astro", _page18],
    ["src/pages/admin.astro", _page19],
    ["src/pages/api/assign-supervisor.js", _page20],
    ["src/pages/api/auth/session.ts", _page21],
    ["src/pages/api/remove-supervisor.js", _page22],
    ["src/pages/api/updateItem.js", _page23],
    ["src/pages/contact.astro", _page24],
    ["src/pages/dashboard/index.astro", _page25],
    ["src/pages/search.astro", _page26],
    ["src/pages/index.astro", _page27]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "e345130f-cc70-4986-928e-3cd1e0b1f977",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
