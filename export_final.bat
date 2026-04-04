@echo off
echo Exporting database from Railway...
"C:\xampp\mysql\bin\mysqldump.exe" -h hopper.proxy.rlwy.net -P 59527 -u root -pvAUxNDCBWJoRuKcVwPATpeIHdQwHYXRd --skip-secure-auth railway > backup_final.sql
echo Export completed!
if exist backup_final.sql (
    echo Backup file created successfully!
    dir backup_final.sql
) else (
    echo Backup file was not created!
)
pause
