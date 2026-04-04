@echo off
echo Checking Prisma schema for Installment model...
echo.

"C:\xampp\mysql\bin\mysql.exe" -u root -e "USE eleman; DESCRIBE installment;"

echo.
echo Checking Prisma schema file...
type "C:\Users\ENJAZ\.gemini\antigravity\scratch\eleman\prisma\schema.prisma" | findstr /C:"model Installment" -A 20

pause
