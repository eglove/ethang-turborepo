choco upgrade all
npm i -g empty-trash-cli npm pnpm trash-cli turbo yarn nx

$commit = Read-Host "Update Repo? (y/n)"

if ($commit -eq "y")
{
    update-repo.ps1
}
