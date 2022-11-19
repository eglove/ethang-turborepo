$commitMessage = $args

if (!$args)
{
    $commitMessage = Read-Host "Enter a commit message"
}

Set-Location ~/Projects/ethang-turborepo
pnpm store prune
pnpm i --no-frozen-lockfile
git add .
git commit -m "$commitMessage"
npx --yes browserslist@latest --update-db
npx turbo lint

if ($?)
{
    npx stylelint "**/*.module.css" --fix
}

if ($?)
{
    npx turbo test
}

if ($?)
{
    git add .
    git commit -m "$commitMessage {Automated Fixup}"
    npx turbo build
}
else
{
    Break
}

if ($?)
{
    git push
}
else
{
    Break
}
