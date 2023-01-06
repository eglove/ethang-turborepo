choco upgrade all
npm i -g @sanity/cli empty-trash-cli jest npm nx pnpm trash-cli turbo yarn

$commit = Read-Host "Update Repo? (y/n)"

if ($commit -eq "y")
{
    update-repo.ps1
}
