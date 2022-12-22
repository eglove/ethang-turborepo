$directory = Read-Host "Directory to Recursively remove"
Set-Location ~/Projects/ethang-turborepo
Get-ChildItem -Filter $directory -Recurse -Force | Remove-Item -Recurse -Force
