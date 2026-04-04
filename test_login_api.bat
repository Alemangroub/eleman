@echo off
echo Testing login API directly...
echo.

echo 1. Testing admin login:
curl -X POST http://localhost:4321/api/auth/login -H "Content-Type: application/json" -d "{\"email\":\"id1@elemancompany.net\",\"password\":\"elemancompanyid111\"}"

echo.
echo.
echo 2. Testing supervisor login:
curl -X POST http://localhost:4321/api/auth/login -H "Content-Type: application/json" -d "{\"email\":\"supervisor@test.com\",\"password\":\"123456\"}"

pause
