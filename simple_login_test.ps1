# Test login API with PowerShell
$headers = @{
    "Content-Type" = "application/json"
}

$body_admin = @{
    email = "id1@elemancompany.net"
    password = "elemancompanyid111"
} | ConvertTo-Json

$body_supervisor = @{
    email = "supervisor@test.com"
    password = "123456"
} | ConvertTo-Json

Write-Host "Testing admin login..."
try {
    $response_admin = Invoke-WebRequest -Uri "http://localhost:4321/api/auth/login" -Method POST -Headers $headers -Body $body_admin
    Write-Host "Admin login successful!"
    Write-Host $response_admin.Content
} catch {
    Write-Host "Admin login failed:"
    Write-Host $_.Exception.Message
}

Write-Host "`nTesting supervisor login..."
try {
    $response_supervisor = Invoke-WebRequest -Uri "http://localhost:4321/api/auth/login" -Method POST -Headers $headers -Body $body_supervisor
    Write-Host "Supervisor login successful!"
    Write-Host $response_supervisor.Content
} catch {
    Write-Host "Supervisor login failed:"
    Write-Host $_.Exception.Message
}
