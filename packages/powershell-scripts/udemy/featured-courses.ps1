$categoryUrls = Get-Content .\libs\powershell-scripts\udemy\udemy-category-urls.txt

foreach ($url in $categoryUrls)
{
  Start-Process chrome "$url --incognito"
}
