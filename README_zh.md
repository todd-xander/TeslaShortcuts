# TeslaShortcuts

Tesla 车辆控制的 [HTTP-Shortcuts](https://github.com/Waboodoo/HTTP-Shortcuts) 配置文件

## 使用

- 只支持 Android。
- 下载 TeslaShortcuts repo，或者直接下载 `shortcuts.json` 文件。
- 下载并安装 [HTTP-Shortcuts](https://http-shortcuts.rmy.ch)(测试过 v1.38.0)。
- 点击右上角 `配置` 图标。
- 点击 `导入快捷方式`。
- 选择 `导入文档`。
- 选取下载的 JSON 文件。
- 开始使用吧~

## 长按快捷菜单

TeslaShortcuts 为 Android 的长按快捷菜单预设了几个操作，可以长按 HTTP-shortcuts 呼出而不需进入 APP。你也可以修改他们:

- 进入某个快捷方式的编辑页面。
- 点击 `杂项设置`。
- 勾选 `在主应用长按快捷菜单中显示方式`。
- Android 系统可能会限制长按快捷菜单的操作数目，需要时，关闭部分不必要的操作。

## 安全性

- TeslaShortcuts 直接与 `https://owner-api.teslamotors.com/` 通信，没有第三方服务能获取你的隐私信息。
- TeslaShortcuts 使用 tesla.com 及 官方 APP 相同的[client 信息](https://pastebin.com/pS7Z6yyP) 通过 OAuth 2.0 方式获取授权。
- 所有操作仅在一台 Tesla Model 3 上完整测试过，测试的 API version 10。
- 成功执行 Login 操作后，你的 access token 和 车辆 ID 会被存储进这个配置文件。如果你打算分享你的配置文件，或给该项目提交 PR，请确保这些信息不要泄露（Logout 操作可以清理这些信息）。
- TeslaShortcuts 不会存储你的 e-mail，密码 以及 PIN code，所以当执行需要 PIN code 的操作，你必须手动输入。如果愿意，你也可以修改配置 (变量菜单 -> 选择一个变量 -> `编辑` -> `[√] 保存值`)，以允许 HTTP-Shortcuts 保存它。

## 注意事项

- 对于定位相关功能，TeslaShortcuts 通过发送 [Android Intent](https://developer.android.com/guide/components/intents-filters) 与 Baidu 地图 APP 通信。如果愿意，你可以修改为你喜欢的 APP。
- 同样，搜索附近的充电站功能，也没有使用 Tesla API，而是使用的 Baidu 地图。
- `Utilities` 分类中的快捷方式是一些辅助功能，而不是为用户准备的，尽管如此，你也可以使用他们。
