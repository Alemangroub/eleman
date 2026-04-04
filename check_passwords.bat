@echo off
echo Checking user passwords in database...
echo.

"C:\xampp\mysql\bin\mysql.exe" -u root -e "USE eleman; SELECT id, name, email, role, LEFT(password, 20) as password_hash FROM User;"

pause
