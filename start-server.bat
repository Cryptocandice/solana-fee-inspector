@echo off
chcp 65001 >nul
title Candice Solana Fee Inspector - 5173
cd /d "%~dp0"
set PORT=5173
echo.
echo Candice Solana 交易手续费分析网站启动中...
echo.
echo 地址: http://127.0.0.1:5173/
echo.
echo 请保持这个窗口打开。关闭窗口 = 停止网站服务。
echo.
"C:\Users\L\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" "%~dp0server.mjs"
echo.
echo 服务已停止或启动失败，请查看上面的错误信息。
pause
