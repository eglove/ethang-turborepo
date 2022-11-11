$categoryUrls = Get-Content .\packages\powershell-scripts\udemy\udemy-category-urls.txt

foreach ($url in $categoryUrls)
{
  Start-Process chrome "$url --incognito"
}
