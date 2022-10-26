$today = Get-Date
$cursorDate = ($today).AddYears(-1)

Set-Location ~/Projects/ethang-turborepo

while ($cursorDate -le $today) {
  $dateString = (Get-Date $cursorDate -UFormat "%B %d, %Y")
  $string = 'git commit --date="' + $dateString + '" -m "Hmm..."'

  Set-Content -Path ./fake-history.txt -Value $string
  git add .
  git commit --date="$dateString" -m "Hmm..."

  $cursorDate = $cursorDate.AddDays(1)
}

git push
