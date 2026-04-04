@echo off
echo Checking DailyExpense table structure...
echo.

"C:\xampp\mysql\bin\mysql.exe" -u root -e "USE eleman; DESCRIBE DailyExpense;"

echo.
echo Checking if dailyexpense table exists (lowercase):
"C:\xampp\mysql\bin\mysql.exe" -u root -e "USE eleman; SHOW TABLES LIKE 'dailyexpense';"

pause
