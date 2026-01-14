pnpm build 2>&1 | Out-File -FilePath .\build-output.log -Encoding UTF8
Get-Content .\build-output.log
