# aeronje_style_chocolatey_setup.ps1
# Chocolatey auto installer script
# Ron Penones | October 11th 2025 - Feel free to share and reproduce, the core idea is mine with some assistance of AI. Padayon!

Write-Host " Simulan mo na magpakulo ng tubig at magtimpla ng kape kasi matagal-tagal ang process na ito." -ForegroundColor Cyan
Write-Host " Huwag mo pansinin ang mga yellow prints or messages in black background dahil warning lang iyon at hindi error." -ForegroundColor Cyan

# Step 1: Allow PowerShell script execution for this session
Write-Host " Lapatan ko lang ng setting execution policy bypass para wala na tayong roadblocks sa mga subsequent process or stages, huwag kang atat bes." -ForegroundColor Cyan
Set-ExecutionPolicy Bypass -Scope Process -Force

# Step 2: Install Chocolatey
# The URL in line 16 is based on Chocolatey’s tech note: https://chocolatey.org/install#individual 
# Please check this product documentation regularly and update the URL in line 16 if the script returns an error due to an invalid or changed source link
Write-Host " Installing Chocolatey..." -ForegroundColor Yellow
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Step 3: Refresh and apply system environment variables
Write-Host "️ Lapat ko lang mga ginawa natin sa system environment variables para di ka na pumunta sa control panel mamaya, you're welcome bes!" -ForegroundColor Cyan
refreshenv | Out-Null

# Step 4: Install related essential packages
Write-Host " Magsisimula na ako mag-install ng Windows terminal" -ForegroundColor Cyan
choco install microsoft-windows-terminal -y

Write-Host " Magsisimula na ako mag-install ng Oh My Posh para aesthetic bhe pak!" -ForegroundColor Cyan
choco install oh-my-posh -y

# Step 5: Install Windows Subsystem for Linux
Write-Host " Magsisimula na ako mag-install ng WSL or Windows Subsystem for Linux - subsystem to ha? Hindi virtual machine or OS installation, FYI lang bes." -ForegroundColor Cyan
wsl --install

# Done
Write-Host " Setup complete!" -ForegroundColor Green
Write-Host " Paki-restart iyong computer mo bes kasi marami tayong ginawa at para ma-apply ang lahat ng changes." -ForegroundColor Cyan