import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

(async () => {
    const conn = await mysql.createConnection({
        host: 'srv846.hstgr.io',
        user: 'u443584916_mohamed',
        password: 'Soliman199720',
        database: 'u443584916_eleman'
    });

    try {
        const email = '1@1.com';
        const password = '112233';
        const hashedPassword = await bcrypt.hash(password, 10);
        const userId = crypto.randomUUID();

        const query = `
      INSERT INTO user (id, name, role, email, password) 
      VALUES (?, ?, ?, ?, ?)
    `;

        await conn.query(query, [userId, 'Admin', 'admin', email, hashedPassword]);
        console.log('✅ تم إنشاء Admin User بنجاح!');
        console.log('Email:', email);
        console.log('Password:', password);
    } catch (e) {
        console.log('❌ خطأ:', e.message);
    }

    await conn.end();
})();
