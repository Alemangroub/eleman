import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: 'srv846.hstgr.io',
    user: 'u443584916_mohamed',
    password: 'Soliman199720',
    database: 'u443584916_eleman',
    port: 3306
});

console.log('جاري حذف الجداول...');
const tables = ['agreement', 'item', 'project', 'projectimport', 'projectsupervisor', 'remainslog', 'dailyexpense', 'dailyreport', 'expensereport', 'leftoverreport', 'user'];

for (const t of tables) {
    try {
        await connection.query(`DROP TABLE IF EXISTS ${t}`);
        console.log('تم حذف:', t);
    } catch (e) {
        console.log('خطأ في:', t, e.message);
    }
}

await connection.end();
console.log('تم حذف كل الجداول بنجاح!');
