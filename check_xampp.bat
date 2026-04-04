@echo off
echo Checking XAMPP MySQL connection...
echo.

echo 1. Testing MySQL connection:
"C:\xampp\mysql\bin\mysql.exe" -u root -e "SELECT 'MySQL is working!' as status;"

echo.
echo 2. Showing databases:
"C:\xampp\mysql\bin\mysql.exe" -u root -e "SHOW DATABASES;"

echo.
echo 3. Checking eleman database:
"C:\xampp\mysql\bin\mysql.exe" -u root -e "USE eleman; SHOW TABLES;"

echo.
echo 4. Checking users in eleman database:
"C:\xampp\mysql\bin\mysql.exe" -u root -e "USE eleman; SELECT id, name, email, role FROM User;"

pause
