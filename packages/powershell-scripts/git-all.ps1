$commitMessage = $args

if (!$args)
{
  $commitMessage = Read-Host "Enter a commit message"
}

Set-Location ~/Projects/ethang-turborepo
git add .
git commit -m "$commitMessage"
npx --yes browserslist@latest --update-db
npx turbo lint
npx stylelint "**/*.module.css" --fix
npx turbo test

if ($?) {
  git add .
  git commit -m "$commitMessage {Automated Fixup}"
  npx turbo build
} else {
  Break
}

if ($?) {
  npx --yes snyk test --all-projects
} else {
  Break
}

if ($?) {
  git push
} else {
  Break
}
