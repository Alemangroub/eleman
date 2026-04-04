@echo off
echo Creating users with correct passwords...
echo.

"C:\xampp\mysql\bin\mysql.exe" -u root eleman < create_real_users.sql

echo.
echo Users created successfully!
echo.
echo Testing login:
echo - Admin: id1@elemancompany.net / elemancompanyid111
echo - Supervisor: supervisor@test.com / 123456

pause
