@echo off
echo Starting server with environment variables...
set DATABASE_URL=mysql://root:@localhost:3306/eleman
set JWT_SECRET=eleman-secret-key-for-local-development
echo DATABASE_URL=%DATABASE_URL%
echo JWT_SECRET=%JWT_SECRET%
echo.
echo Starting Astro server...
npm run dev
pause
