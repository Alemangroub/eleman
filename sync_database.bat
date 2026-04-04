@echo off
echo Syncing Prisma schema with actual database...
echo.

echo Step 1: Generate Prisma client...
npx prisma generate

echo.
echo Step 2: Push schema changes to database...
npx prisma db push

echo.
echo Step 3: Check if sync was successful...
"C:\xampp\mysql\bin\mysql.exe" -u root -e "USE eleman; DESCRIBE installment;"

echo.
echo Database sync completed!
pause
