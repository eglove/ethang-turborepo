#!/bin/bash

commitMessage="$1"

if [ -z "$commitMessage" ]; then
  # shellcheck disable=SC2162
  read -p "Enter a commit message: " commitMessage
fi

cd ~/Projects/ethang-turborepo || exit
pnpm store prune
pnpm i --no-frozen-lockfile
npx --yes browserslist@latest --update-db
git add .
git commit -m "$commitMessage"
""
lintResult=$(npx turbo lint)
write $lintResult

if [ "$lintResult" -eq 0 ]; then
  stylelintResult=$(npx stylelint "**/*.module.css" --fix)
fi

if [ "$stylelintResult" -eq 0 ]; then
  testResult=$(npx turbo test)
fi

if [ "$testResult" -eq 0 ]; then
  git add .
  git commit -m "$commitMessage {Automated Fixup}"
  npx turbo build
fi

# shellcheck disable=SC2181
if [ "$?" -eq 0 ]; then
  git push
fi
