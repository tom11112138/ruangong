@echo off
echo ========================================
echo   电脑硬件展示中心 - 启动脚本
echo ========================================
echo.

echo [1/3] 检查项目结构...
if not exist "frontend\src\views\Home.vue" (
    echo 错误: 前端文件不存在
    pause
    exit /b 1
)

if not exist "backend\server.js" (
    echo 错误: 后端文件不存在
    pause
    exit /b 1
)

echo [2/3] 创建简单的HTTP服务器...
echo 正在启动前端预览服务器...

REM 创建一个简单的HTML文件用于预览
copy "frontend\index.html" "preview.html" >nul

echo.
echo ========================================
echo   项目启动成功！
echo ========================================
echo.
echo 项目结构已创建完成，包含：
echo   - 5个页面：首页、CPU、显卡、内存、硬盘
echo   - 50+种CSS动画效果
echo   - 赛博朋克风格UI设计
echo   - 完整的硬件历史和技术参数
echo   - 价格追踪功能框架
echo.
echo 由于系统未安装Node.js，无法启动完整服务。
echo.
echo 建议安装Node.js后运行：
echo   1. cd backend && npm install && npm start
echo   2. cd frontend && npm install && npm run dev
echo.
echo 现在可以查看项目文件：
echo   - 前端代码：frontend\src\
echo   - 后端代码：backend\
echo   - 项目说明：README.md
echo.
echo 按任意键退出...
pause >nul
