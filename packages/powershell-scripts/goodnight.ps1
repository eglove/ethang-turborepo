Update-Module PSWindowsUpdate
Get-WindowsUpdate -MicrosoftUpdate -AcceptAll -Install
choco upgrade all
Stop-Computer
