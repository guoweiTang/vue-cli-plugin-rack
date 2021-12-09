# vue-cli-plugin-rack
[![npm](https://img.shields.io/npm/dm/vue-cli-plugin-rack?style=flat-square)](https://github.com/guoweiTang/vue-cli-plugin-rack)
![NPM](https://img.shields.io/npm/l/vue-cli-plugin-rack?style=flat-square)

**基于vue3的一套完整的后台系统解决方案**
> 提供js和typescript两种模式
## 语言
[English](https://github.com/guoweiTang/vue-cli-plugin-rack/)
## 安装
首先你需要全局安装`@vue/cli` (参考说明) [这里](https://cli.vuejs.org/zh/)).

然后创建项目增加`rack`插件:
```bash
vue create my-app
```
![1634636776(1)](https://user-images.githubusercontent.com/8178166/137889017-fdf89a0f-6b63-44e2-a3bd-4edb94a65a2e.jpg)
```bash
cd my-app
vue add rack
npm run initPrecommit  #如果添加插件的模式不是typescript,跳过这一步
```
您将被问及一些有关如何在项目中配置rack的问题。命令执行完之后，就能启动项目了
### 使用vue-cli视图
如果您已完成“安装”部分中的所有操作，请跳过此部分。

如果您喜欢在vue cli UI中管理项目（通过运行“vue UI”），下面是添加rack插件的方法：转到“插件”菜单，单击右上角的“添加插件”按钮，找到“vue-cli-plugin-rack”并安装它。
## 插件功能
- **通行证**
  - 登录
  - 注册
  - 重置密码
- **权限认证**
  - 路由认证
  - 菜单认证
- **错误页面**
  - 403
  - 404
  - 500
- **异步请求包装器**
  - 重试
  - 无痛刷新token
  - 请求反馈
- **Element-plus**
- **路由**
- **状态管理器**
  - 命名空间
  - 数据持久化
- **Mock**
  - 动态数据
## 项目目录
```
.
├── mock                                    // 虚拟数据生成文件
│   └── index.js
├── public                                  
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue                             // 入口模板
│   ├── main.ts                             // 入口文件
│   ├── shims-vue.d.ts                      // typescript 声明文件
│   ├── assets                              // 图片、字体多媒体等文件
│   ├── components                          // 非业务组件
│   │   ├── HelloWorld.vue
│   │   └── editable-text
│   │       └── index.vue
│   ├── config                              // 项目配置信息
│   │   └── index.ts
│   ├── layouts                             // 业务组件
│   │   ├── app-aside                       // 侧边栏（菜单栏）
│   │   │   ├── index.vue
│   │   │   └── item.vue
│   │   ├── app-footer                      // 页尾
│   │   │   └── index.vue
│   │   ├── app-header                      // 页头
│   │   │   └── index.vue
│   │   └── basic-layout.vue                // 嵌套路由模板
│   ├── router                              // 路由配置
│   │   ├── index.ts
│   │   └── modules
│   │       ├── auth.ts                     // 凭证路由
│   │       ├── common.ts                   // 公共路由
│   │       └── index.ts                    // 业务路由
│   ├── store                               // 共享数据
│   │   ├── admin
│   │   │   ├── common.ts
│   │   │   ├── data.d.ts
│   │   │   └── user.ts
│   │   ├── data.d.ts
│   │   ├── index.ts
│   │   └── modules                          // 业务数据模块
│   │       ├── basic-table.ts
│   │       └── data.d.ts
│   ├── utils                                // 工具
│   │   ├── data.d.ts
│   │   ├── request.ts                       // axios实例对象
│   │   └── token.ts
│   └── views
│       ├── account                          
│       │   ├── authorzation.vue             // 角色权限页面
│       │   └── index.vue                    // 我的主页
│       ├── auth                              
│       │   ├── assets
│       │   ├── login.vue                    // 登录
│       │   ├── register.vue                 // 注册
│       │   └── reset-password.vue           // 忘记密码
│       ├── error                            // 错误页面
│       │   ├── 403.vue
│       │   ├── 404.vue
│       │   └── 500.vue
│       ├── home                             // 主页
│       │   └── index.vue
│       ├── table                            // 列表  
│       │   ├── components                   // 页面组件
│       │   ├── composables                  // 组合函数
│       │   └── basic-table.vue              // 基础列表
│       ├── data.d.ts
│       └── service.ts                       // 异步请求的入口
├── .editorconfig
├── .env.development
├── .env.mock
├── .env.production
├── .eslintrc.js
├── .gitignore
├── babel.config.js
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json                           // @vue/cli配置
```
## 项目配置
### 编译并热重载以普通开发模式启动
```
npm run serve
```
### 编译并热重载以模拟数据开发模式启动
```
npm run serve:mock
```
### 生产模式构建
```
npm run build
```
### 检查代码格式（修复部分语法）
```
npm run lint
```
## 界面示例
> [在线预览](https://guoweitang.net/)
## 自定义配置
查看 [配置参考](https://cli.vuejs.org/zh/config/).

