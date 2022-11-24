$directory = $args

if (!$directory)
{
    $directory = Read-Host "Directory to Recursively remove"
}

Set-Location ~/Projects/ethang-turborepo
Get-ChildItem -Include $directory -Recurse -Force | Remove-Item -Recurse -Force
