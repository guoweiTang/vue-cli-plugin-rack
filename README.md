# vue-cli-plugin-rack
Element Plus plugin for `@vue/cli` 4.5.

[![npm](https://img.shields.io/npm/dm/vue-cli-plugin-rack.svg)](https://github.com/guoweiTang/vue-cli-plugin-rack)
![NPM](https://img.shields.io/npm/l/vue-cli-plugin-rack)

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
```

You'll be asked some questions regarding how rack is configured in your project. After that, you're good to go.
### Use with vue-cli UI

Skip this part if you've done everything in the `Install` section.

If you prefer managing your project in vue-cli UI (by running `vue ui`), here's how you can add rack plugin: go to the Plugins menu, click the upper right `+ Add plugin` button, find `vue-cli-plugin-rack` and install it.
## Project setup

### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and hot-reloads for development and mock data
```
npm run serve:mock
```
### Compiles for development
```
npm run build:dev
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

## Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

