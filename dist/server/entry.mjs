import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_zSSnLH0y.mjs';
import { manifest } from './manifest_iH3ycuz9.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about/basic-info.astro.mjs');
const _page2 = () => import('./pages/about/innovation.astro.mjs');
const _page3 = () => import('./pages/about/quality.astro.mjs');
const _page4 = () => import('./pages/about/transparency.astro.mjs');
const _page5 = () => import('./pages/about.astro.mjs');
const _page6 = () => import('./pages/achievements.astro.mjs');
const _page7 = () => import('./pages/admin.astro.mjs');
const _page8 = () => import('./pages/api/assign-supervisor.astro.mjs');
const _page9 = () => import('./pages/api/auth/logout.astro.mjs');
const _page10 = () => import('./pages/api/auth/session.astro.mjs');
const _page11 = () => import('./pages/api/delete-user.astro.mjs');
const _page12 = () => import('./pages/api/project-details/_id_.astro.mjs');
const _page13 = () => import('./pages/api/remove-supervisor.astro.mjs');
const _page14 = () => import('./pages/api/update-user.astro.mjs');
const _page15 = () => import('./pages/api/updateitem.astro.mjs');
const _page16 = () => import('./pages/contact.astro.mjs');
const _page17 = () => import('./pages/crs/add-contract.astro.mjs');
const _page18 = () => import('./pages/crs/add-project.astro.mjs');
const _page19 = () => import('./pages/crs/archived-projects.astro.mjs');
const _page20 = () => import('./pages/crs/contract-details.astro.mjs');
const _page21 = () => import('./pages/crs/edit-contract.astro.mjs');
const _page22 = () => import('./pages/crs/notifications.astro.mjs');
const _page23 = () => import('./pages/crs/project-installments.astro.mjs');
const _page24 = () => import('./pages/crs/projects/_id_/agreements.astro.mjs');
const _page25 = () => import('./pages/crs/projects/_id_/daily-reports.astro.mjs');
const _page26 = () => import('./pages/crs/projects/_id_/expense-reports.astro.mjs');
const _page27 = () => import('./pages/crs/projects/_id_/items.astro.mjs');
const _page28 = () => import('./pages/crs/projects/_id_/remains.astro.mjs');
const _page29 = () => import('./pages/crs/projects/_id_/suppliers.astro.mjs');
const _page30 = () => import('./pages/crs/projects/_id_.astro.mjs');
const _page31 = () => import('./pages/crs/projects.astro.mjs');
const _page32 = () => import('./pages/crs/users.astro.mjs');
const _page33 = () => import('./pages/crs.astro.mjs');
const _page34 = () => import('./pages/dashboard.astro.mjs');
const _page35 = () => import('./pages/search.astro.mjs');
const _page36 = () => import('./pages/services/commercial-projects.astro.mjs');
const _page37 = () => import('./pages/services/project-management.astro.mjs');
const _page38 = () => import('./pages/services/real-estate-investment.astro.mjs');
const _page39 = () => import('./pages/services/residential-development.astro.mjs');
const _page40 = () => import('./pages/services.astro.mjs');
const _page41 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/about/basic-info.astro", _page1],
    ["src/pages/about/innovation.astro", _page2],
    ["src/pages/about/quality.astro", _page3],
    ["src/pages/about/transparency.astro", _page4],
    ["src/pages/about.astro", _page5],
    ["src/pages/achievements.astro", _page6],
    ["src/pages/admin.astro", _page7],
    ["src/pages/api/assign-supervisor.js", _page8],
    ["src/pages/api/auth/logout.ts", _page9],
    ["src/pages/api/auth/session.ts", _page10],
    ["src/pages/api/delete-user.js", _page11],
    ["src/pages/api/project-details/[id].js", _page12],
    ["src/pages/api/remove-supervisor.js", _page13],
    ["src/pages/api/update-user.ts", _page14],
    ["src/pages/api/updateItem.js", _page15],
    ["src/pages/contact.astro", _page16],
    ["src/pages/crs/add-contract.astro", _page17],
    ["src/pages/crs/add-project.astro", _page18],
    ["src/pages/crs/archived-projects.astro", _page19],
    ["src/pages/crs/contract-details.astro", _page20],
    ["src/pages/crs/edit-contract.astro", _page21],
    ["src/pages/crs/notifications.astro", _page22],
    ["src/pages/crs/project-installments.astro", _page23],
    ["src/pages/crs/projects/[id]/agreements.astro", _page24],
    ["src/pages/crs/projects/[id]/daily-reports.astro", _page25],
    ["src/pages/crs/projects/[id]/expense-reports.astro", _page26],
    ["src/pages/crs/projects/[id]/items.astro", _page27],
    ["src/pages/crs/projects/[id]/remains.astro", _page28],
    ["src/pages/crs/projects/[id]/suppliers.astro", _page29],
    ["src/pages/crs/projects/[id].astro", _page30],
    ["src/pages/crs/projects.astro", _page31],
    ["src/pages/crs/users.astro", _page32],
    ["src/pages/crs.astro", _page33],
    ["src/pages/dashboard/index.astro", _page34],
    ["src/pages/search.astro", _page35],
    ["src/pages/services/commercial-projects.astro", _page36],
    ["src/pages/services/project-management.astro", _page37],
    ["src/pages/services/real-estate-investment.astro", _page38],
    ["src/pages/services/residential-development.astro", _page39],
    ["src/pages/services.astro", _page40],
    ["src/pages/index.astro", _page41]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///home/user/eleman-company/dist/client/",
    "server": "file:///home/user/eleman-company/dist/server/",
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
