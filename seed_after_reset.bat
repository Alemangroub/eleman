@echo off
echo Seeding users after database reset...
echo.

"C:\xampp\mysql\bin\mysql.exe" -u root eleman < seed_users.sql

echo.
echo Users seeded successfully!
echo.
echo Verifying:
"C:\xampp\mysql\bin\mysql.exe" -u root -e "USE eleman; SELECT id, name, email, role FROM User;"

echo.
echo Checking database tables:
"C:\xampp\mysql\bin\mysql.exe" -u root -e "USE eleman; SHOW TABLES;"

echo.
echo Checking Installment table structure:
"C:\xampp\mysql\bin\mysql.exe" -u root -e "USE eleman; DESCRIBE Installment;"

pause
