@echo off
echo Checking Installment table structure...
echo.

"C:\xampp\mysql\bin\mysql.exe" -u root -e "USE eleman; DESCRIBE Installment;"

echo.
echo Checking if installment table exists:
"C:\xampp\mysql\bin\mysql.exe" -u root -e "USE eleman; SHOW TABLES LIKE 'Installment';"

echo.
echo Checking if installment table exists (lowercase):
"C:\xampp\mysql\bin\mysql.exe" -u root -e "USE eleman; SHOW TABLES LIKE 'installment';"

pause
