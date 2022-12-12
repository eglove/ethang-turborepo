function BreakOnFail($function) {
    $function

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

BreakOnFail(npx stylelint "**/*.module.css" --fix)
BreakOnFail(npx turbo test)

gitCommit("$commitMessage {Automated Fixup}")

BreakOnFail(npx turbo build)

git push
