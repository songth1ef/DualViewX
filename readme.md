# DualViewX - 横竖同拍视频录制应用

基于 uni-app x 开发的高性能视频录制应用，支持四路同时录制（前置横屏、前置竖屏、后置横屏、后置竖屏）。

## 功能特性

### 🎥 多路录制
- **四路同时录制**: 前置横屏、前置竖屏、后置横屏、后置竖屏
- **灵活配置**: 支持单路、双路、四路录制模式
- **性能自适应**: 根据设备性能自动调整录制参数

### 🎨 实时处理
- **实时滤镜**: 曝光、饱和度、对比度、白平衡调整
- **色彩模式**: 支持 Log/Flat 色彩模式
- **高帧率**: 支持 60fps 或以上帧率录制

### 📱 用户体验
- **直观界面**: 现代化的 UI 设计
- **实时监控**: 性能数据实时显示
- **文件管理**: 完整的录制文件管理功能

## 技术栈

- **前端框架**: uni-app x
- **开发语言**: TypeScript, UTS
- **状态管理**: Pinia
- **原生插件**: 自定义摄像头插件
- **视频编码**: H.264/HEVC
- **音频编码**: AAC

## 项目结构

```
DualViewX/
├── src/                    # 源代码目录
│   ├── pages/             # 页面文件
│   │   ├── index/         # 首页
│   │   ├── recording/     # 录制页面
│   │   ├── settings/      # 设置页面
│   │   └── playback/      # 播放页面
│   ├── components/        # 组件文件
│   ├── plugins/           # 插件接口
│   ├── store/             # 状态管理
│   ├── types/             # 类型定义
│   ├── utils/             # 工具函数
│   ├── App.vue            # 应用根组件
│   └── main.ts            # 应用入口
├── static/                # 静态资源
├── uni_modules/           # uni-app 插件
├── pages.json             # 页面配置
├── manifest.json          # 应用配置
├── package.json           # 项目配置
└── README.md              # 项目说明
```

## 开发环境

### 环境要求
- Node.js >= 18.0.0
- HBuilderX 或 uni-app CLI
- Android Studio (Android 开发)
- Xcode (iOS 开发)

### 安装依赖
```bash
npm install
```

### 开发运行
```bash
# H5 开发
npm run dev:h5

# App 开发
npm run dev:app

# 微信小程序开发
npm run dev:mp-weixin
```

### 构建发布
```bash
# 构建 H5
npm run build:h5

# 构建 App
npm run build:app

# 构建微信小程序
npm run build:mp-weixin
```

## 核心功能

### 1. 四路同时录制
- 同时使用前后摄像头
- 支持横屏和竖屏同时录制
- 四路视频独立存储

### 2. 录制控制
- 开始/停止录制
- 暂停/继续录制
- 实时状态显示

### 3. 参数调节
- 分辨率配置 (720P/1080P/4K)
- 帧率设置 (24/30/60/120fps)
- 编码格式选择 (H.264/HEVC)

### 4. 滤镜处理
- 曝光调整 (-3EV 到 +3EV)
- 饱和度调整 (0-200%)
- 对比度调整 (0-200%)
- 白平衡调整 (2000K-8000K)

### 5. 文件管理
- 录制文件列表
- 视频播放器
- 文件分享和删除

## 性能要求

### 帧率稳定性
- 目标帧率: 60fps
- 允许波动: ±2fps
- 丢帧率: < 1%

### 内存使用
- 单路录制: < 500MB
- 四路录制: < 1.5GB
- 峰值内存: < 2GB

### CPU 使用率
- 正常录制: < 60%
- 四路录制: < 85%
- 高帧率录制: < 80%

## 设备兼容性

### Android 设备
- 最低版本: Android 7.0 (API 24)
- 推荐版本: Android 10.0 (API 29) 以上
- 硬件要求: 双摄像头支持、4GB RAM 以上

### iOS 设备
- 最低版本: iOS 12.0
- 推荐版本: iOS 14.0 以上
- 硬件要求: iPhone 7 以上、4GB RAM 以上

## 开发计划

### v0.1.0 - MVP 基础版本
- [x] 项目基础架构搭建
- [x] 基础 UI 界面开发
- [x] 摄像头基础功能实现
- [x] 原生插件框架搭建

### v0.2.0 - 核心功能版本
- [ ] 双摄同步录制功能
- [ ] 录制控制功能
- [ ] 基础滤镜处理
- [ ] 音视频同步功能

### v0.3.0 - 四路录制版本
- [ ] 四路同时录制功能
- [ ] 录制组合配置功能
- [ ] 性能自适应功能
- [ ] 高级滤镜处理

### v1.0.0 - 正式版本
- [ ] 完整功能实现
- [ ] 性能优化
- [ ] 设备兼容性测试
- [ ] 应用打包发布

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 联系方式

- 项目链接: [https://github.com/your-username/DualViewX](https://github.com/your-username/DualViewX)
- 问题反馈: [Issues](https://github.com/your-username/DualViewX/issues)

---

**DualViewX Team** - 让视频录制更简单、更专业