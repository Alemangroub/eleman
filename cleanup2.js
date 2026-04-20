import mysql from 'mysql2/promise';

(async () => {
    const conn = await mysql.createConnection({
        host: 'srv846.hstgr.io',
        user: 'u443584916_mohamed',
        password: 'Soliman199720',
        database: 'u443584916_eleman'
    });

    try {
        await conn.query('SET FOREIGN_KEY_CHECKS=0');

        const tables = ['Project', 'ProjectSupervisor', 'User', 'Item', 'Agreement', 'DailyExpense', 'DailyReport', 'ExpenseReport', 'LeftoversReport', 'Installment', 'ProjectImport', 'RemainsLog', 'user', 'project', 'projectsupervisor'];

        for (const t of tables) {
            try {
                await conn.query(`DROP TABLE IF EXISTS \`${t}\``);
                console.log('حُذف:', t);
            } catch (e) { }
        }

        await conn.query('SET FOREIGN_KEY_CHECKS=1');
        console.log('انتهى الحذف بنجاح');
    } catch (e) {
        console.log('خطأ:', e.message);
    }

    await conn.end();
})();
