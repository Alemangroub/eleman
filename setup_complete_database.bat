@echo off
echo Creating complete database structure in XAMPP...
echo.

echo Step 1: Creating database...
"C:\xampp\mysql\bin\mysql.exe" -u root -e "DROP DATABASE IF EXISTS eleman; CREATE DATABASE eleman CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

echo Step 2: Creating tables and inserting sample data...
"C:\xampp\mysql\bin\mysql.exe" -u root eleman < create_full_database.sql

echo.
echo Database setup completed!
echo.
echo Testing database connection...
"C:\xampp\mysql\bin\mysql.exe" -u root -e "USE eleman; SELECT 'Users:' as table_name, COUNT(*) as count FROM User UNION SELECT 'Projects:', COUNT(*) FROM Project UNION SELECT 'Customers:', COUNT(*) FROM Customer UNION SELECT 'Units:', COUNT(*) FROM Unit UNION SELECT 'Installments:', COUNT(*) FROM Installment;"

echo.
echo Database is ready for use!
echo You can now start the application with: npm run dev
pause
