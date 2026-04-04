@echo off
echo Fixing user passwords...
echo.

"C:\xampp\mysql\bin\mysql.exe" -u root eleman < fix_passwords.sql

echo.
echo Passwords have been updated!
echo.
echo Testing updated users:
"C:\xampp\mysql\bin\mysql.exe" -u root -e "USE eleman; SELECT id, name, email, role FROM User;"

pause
