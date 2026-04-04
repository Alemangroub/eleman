# Test delete API
$headers = @{
    "Content-Type" = "application/json"
}

$body = @{
    id = "project-001"
} | ConvertTo-Json

Write-Host "Testing delete API..."
try {
    $response = Invoke-WebRequest -Uri "http://localhost:4321/api/projects/delete" -Method POST -Headers $headers -Body $body
    Write-Host "Delete API response:"
    Write-Host $response.Content
} catch {
    Write-Host "Delete API failed:"
    Write-Host $_.Exception.Message
    Write-Host $_.Exception.Response.StatusCode.value__
}
