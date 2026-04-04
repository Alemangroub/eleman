@echo off
echo Exporting database from Railway with secure connection...
"C:\xampp\mysql\bin\mysqldump.exe" --default-authentication-plugin=mysql_native_password -h hopper.proxy.rlwy.net -P 59527 -u root -pvAUxNDCBWJoRuKcVwPATpeIHdQwHYXRd railway > backup_secure.sql
echo Export completed!
pause
