@echo off
echo Trying to export using different method...
"C:\xampp\mysql\bin\mysqldump.exe" --protocol=tcp -h hopper.proxy.rlwy.net -P 59527 -u root -pvAUxNDCBWJoRuKcVwPATpeIHdQwHYXRd railway > backup_phpmyadmin.sql
echo Export completed!
if exist backup_phpmyadmin.sql (
    echo Backup file created!
    dir backup_phpmyadmin.sql
) else (
    echo Failed to create backup!
)
pause
