@echo off
echo Checking database structure...
echo.

echo 1. Installment table structure:
"C:\xampp\mysql\bin\mysql.exe" -u root -e "USE eleman; DESCRIBE Installment;"

echo.
echo 2. Item table structure:
"C:\xampp\mysql\bin\mysql.exe" -u root -e "USE eleman; DESCRIBE Item;"

echo.
echo 3. DailyReport table structure:
"C:\xampp\mysql\bin\mysql.exe" -u root -e "USE eleman; DESCRIBE DailyReport;"

echo.
echo 4. DailyExpense table structure:
"C:\xampp\mysql\bin\mysql.exe" -u root -e "USE eleman; DESCRIBE DailyExpense;"

pause
