# vue-cli-plugin-rack
[![npm](https://img.shields.io/npm/dm/vue-cli-plugin-rack?style=flat-square)](https://github.com/guoweiTang/vue-cli-plugin-rack)
![NPM](https://img.shields.io/npm/l/vue-cli-plugin-rack?style=flat-square)

**It is a complete background system solution based on vue3.**
> It provides JS and typescript modes
## Language
[中文](https://github.com/guoweiTang/vue-cli-plugin-rack/blob/master/README.zh.md)
## Install
First you need to install `@vue/cli` globally (follow the instructions [here](https://cli.vuejs.org/)).

Then create a project and add the rack plugin:
```bash
vue create my-app
```
![1634636776(1)](https://user-images.githubusercontent.com/8178166/137888838-9e760516-103c-45bf-85b5-92ba2be3d6cf.jpg)
```bash
cd my-app
vue add rack
npm run initPrecommit  #If the typescript answer is no, Otherwise, skip this step
```
You'll be asked some questions regarding how rack is configured in your project. After that, you're good to go.
### Use with vue-cli UI
Skip this part if you've done everything in the `Install` section.

If you prefer managing your project in vue-cli UI (by running `vue ui`), here's how you can add rack plugin: go to the Plugins menu, click the upper right `+ Add plugin` button, find `vue-cli-plugin-rack` and install it.
## Highlights
- **Passport**
  - login
  - register
  - reset password
- **Permission Authentication**
  - Page permission
  - menu item permission
- **Error Page**
  - 403
  - 404
  - 500
- **Async Request(axios)**
  - retry
  - refresh token 
  - feedback message
- **Element-plus**
- **Router**
- **Vuex**
  - namespacing
  - data persistence
- **Mock**
  - dynamic data
## Contents
```
.
├── mock                                    // virtual data file
│   └── index.js
├── public                                  
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue                             // entry template
│   ├── main.ts                             // entry file
│   ├── shims-vue.d.ts                      // ts declaration file
│   ├── assets                              // extra files
│   ├── components                          // common components
│   │   ├── HelloWorld.vue
│   │   └── editable-text
│   │       └── index.vue
│   ├── config                              // common config
│   │   └── index.ts
│   ├── layouts                             // business component
│   │   ├── app-aside                       // page aside
│   │   │   ├── index.vue
│   │   │   └── item.vue
│   │   ├── app-footer                      // page footer
│   │   │   └── index.vue
│   │   ├── app-header                      // page heaer
│   │   │   └── index.vue
│   │   └── basic-layout.vue                // basis of nested routing
│   ├── router                              // route
│   │   ├── index.ts
│   │   └── modules
│   │       ├── auth.ts                     // auth route
│   │       ├── common.ts                   // common route
│   │       └── index.ts                    // business route
│   ├── store                               // shared repository
│   │   ├── admin
│   │   │   ├── common.ts
│   │   │   ├── data.d.ts
│   │   │   └── user.ts
│   │   ├── data.d.ts
│   │   ├── index.ts
│   │   └── modules                          // business store
│   │       ├── basic-table.ts
│   │       └── data.d.ts
│   ├── utils                                // tool
│   │   ├── data.d.ts
│   │   ├── request.ts                       // axios instance object
│   │   └── token.ts
│   └── views
│       ├── account                          
│       │   ├── authorzation.vue             // role page
│       │   └── index.vue                    // myself page
│       ├── auth                              
│       │   ├── assets
│       │   ├── login.vue                    // login page
│       │   ├── register.vue                 // register page
│       │   └── reset-password.vue           // reset password page
│       ├── error                            // error page
│       │   ├── 403.vue
│       │   ├── 404.vue
│       │   └── 500.vue
│       ├── home                             // home page
│       │   └── index.vue
│       ├── table                            // table page
│       │   ├── components                   
│       │   ├── composables                  
│       │   └── basic-table.vue              // basic-table page
│       ├── data.d.ts
│       └── service.ts                       // entry file of async request
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
└── tsconfig.json                           // @vue/cli config file
```
## Project setup
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and hot-reloads for development and mock data
```
npm run serve:mock
```
### Compiles and minifies for production
```
npm run build
```
### Lints and fixes files
```
npm run lint
```
## Preview
> [online preview](https://guoweitang.net/)
## Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
