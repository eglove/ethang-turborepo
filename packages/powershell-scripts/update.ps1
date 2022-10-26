choco upgrade all
npm i -g blitz corepack npm pnpm yarn

$commit = Read-Host "Update Repo? (y/n)"

if ($commit -eq "y")
{
    update-repo.ps1
}
