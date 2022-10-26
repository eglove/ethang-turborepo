Set-Location ~/Projects/ethang-turborepo

$nonWorkspaceLocations = @(
"apps/website-admin",
"apps/sterett-admin"
)

npx nx migrate latest

$migrate = Read-Host "Migrate? (y/n)"

pnpm i
if ($migrate -eq "y")
{
    pnpm nx migrate --run-migrations
}

pnpm up -i --latest

foreach ($location in $nonWorkspaceLocations)
{
    Set-Location ~/Projects/ethang-turborepo/$location
    pnpm up -i --latest
}
Set-Location ~/Projects/ethang-turborepo

$commit = Read-Host "Commit? (y/n)"

if ($commit -eq "y")
{
    git-all Version Bump
}
