@echo off
echo Testing database connection...
"C:\xampp\mysql\bin\mysql.exe" -u root -e "USE eleman; SELECT 'Users:', COUNT(*) FROM User UNION SELECT 'Projects:', COUNT(*) FROM Project UNION SELECT 'Customers:', COUNT(*) FROM Customer;"
pause
