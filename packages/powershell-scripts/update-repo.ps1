Set-Location ~/Projects/ethang-turborepo

pnpm up -i -r --latest

$commit = Read-Host "Commit? (y/n)"

if ($commit -eq "y")
{
    git-all Version Bump
}
