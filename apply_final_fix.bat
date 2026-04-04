@echo off
echo Applying final password fix...
echo.

"C:\xampp\mysql\bin\mysql.exe" -u root eleman < fix_users_final.sql

echo.
echo Passwords have been updated with correct bcrypt hashes!
echo.
echo Test these credentials:
echo - Admin: id1@elemancompany.net / elemancompanyid111
echo - Supervisor: supervisor@test.com / 123456

pause
