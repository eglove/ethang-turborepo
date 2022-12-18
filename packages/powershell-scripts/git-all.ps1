$commitMessage = $args

if (!$args)
{
    $commitMessage = Read-Host "Enter a commit message"
}

Set-Location ~/Projects/ethang-turborepo
git pull
pnpm store prune
pnpm i --no-frozen-lockfile
npx --yes browserslist@latest --update-db
git add .
git commit -m "$commitMessage"
npx turbo lint

if ($?)
{
    npx stylelint "**/*.module.css" --fix
} else {
    Break
}

if ($?)
{
    npx turbo test
} else {
    Break
}

if ($?)
{
    git add .
    git commit -m "$commitMessage {Automated Fixup}"
    npx turbo build
} else {
    Break
}

if ($?)
{
    git push
}
