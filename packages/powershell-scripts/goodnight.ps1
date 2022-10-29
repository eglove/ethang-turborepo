Update-Module PSWindowsUpdate
Get-WindowsUpdate -AcceptAll -Install
Get-WindowsUpdate -MicrosoftUpdate -AcceptAll -Install
choco upgrade all
Stop-Computer
