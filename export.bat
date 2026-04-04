@echo off
echo Exporting database from Railway...
"C:\xampp\mysql\bin\mysqldump.exe" -h hopper.proxy.rlwy.net -P 59527 -u root -pvAUxNDCBWJoRuKcVwPATpeIHdQwHYXRd railway > backup.sql
echo Export completed!
pause
