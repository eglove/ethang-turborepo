choco upgrade all
npm i -g blitz corepack npm pnpm yarn turbo

$commit = Read-Host "Update Repo? (y/n)"

if ($commit -eq "y")
{
    update-repo.ps1
}
