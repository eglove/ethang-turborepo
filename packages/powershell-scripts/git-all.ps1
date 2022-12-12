$commitMessage = $args

function BreakOnFail($function) {
    $function

    if (!$?)
    {
        Break;
    }
}

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
npx turbo lint

BreakOnFail(npx stylelint "**/*.module.css" --fix)
BreakOnFail(npx turbo test)

git add .
git commit -m "$commitMessage {Automated Fixup}"

BreakOnFail(npx turbo build)

git push
