function BreakOnFail() {
    if (!$?)
    {
        Break;
    }
}

function gitCommit ($message) {
    git add .
    git commit -m $message
}

$commitMessage = $args
if (!$args)
{
    $commitMessage = Read-Host "Enter a commit message"
}

Set-Location ~/Projects/ethang-turborepo
pnpm store prune
pnpm i --no-frozen-lockfile
npx --yes browserslist@latest --update-db

gitCommit("$commitMessage")

npx turbo lint
npx stylelint "**/*.module.css" --fix
BreakOnFail
npx turbo test
BreakOnFail
gitCommit("$commitMessage {Automated Fixup}")
npx turbo build
BreakOnFail
git push
