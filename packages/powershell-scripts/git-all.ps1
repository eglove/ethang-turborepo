$commitMessage = $args

if (!$args)
{
    $commitMessage = Read-Host "Enter a commit message"
}

Set-Location ~/Projects/ethang-turborepo
pnpm store prune
pnpm i --no-frozen-lockfile
npx --yes browserslist@latest --update-db
git add .
git commit -m "$commitMessage"
$lintResult = npx turbo lint

if ($lintResult)
{
    $stylelintResult = npx stylelint "**/*.module.css" --fix
}

if ($stylelintResult)
{
    $testResult = npx turbo test
}

if ($testResult)
{
    git add .
    git commit -m "$commitMessage {Automated Fixup}"
    npx turbo build
}

if ($?)
{
    git push
}