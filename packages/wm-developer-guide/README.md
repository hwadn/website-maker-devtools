# 小蜜蜂网站制作平台——开发者指南

## 1 基本使用

* 平台地址

  <a href="https://106.53.61.189" target="_blank">https://106.53.61.189</a>

* 演示视频

  https://github.com/hwadn/website-maker-devtools/assets/43377087/3484213a-2b33-4084-a82b-f45be74c598f

## 2 组件开发

  运行以下组件脚手架命令，创建新的组件。（发包到`chd1994` scope可能会有权限问题，可联系开通）

```sh
  yarn create @chd1994/wm-component
```

开发完在小蜜蜂平台进行注册。（注意：平台使用了npm io的api查找包的详情，npm io不会立马同步刚发布的组件记录，需要等一段时间才能注册）

## 3 系统设计

### 3.1 可用资源

* 腾讯云主机一台

### 3.2 实现功能

* 用户管理
* 组件管理
* 网页管理
* 网页制作
* 在线预览

### 3.2 平台架构

当前小蜜蜂平台的整体架构如下：

![小蜜蜂平台架构](https://github.com/hwadn/website-maker-devtools/assets/43377087/e0ceea90-b6f9-411b-9e4b-3ce4488c16bd)

各模块详情如下：

#### （1）数据库

* 项目地址

  <a href="https://github.com/hwadn/website-maker-db" target="_blank">https://github.com/hwadn/website-maker-db</a>

* 表与表关系

![db-design](https://github.com/hwadn/website-maker-devtools/assets/43377087/ea63fc8c-2f35-43f0-8959-faa26e98fda2)

#### （2）服务端

* 项目地址

  <a href="https://github.com/hwadn/website-maker-backend" target="_blank">https://github.com/hwadn/website-maker-backend</a>

* 平台接口文档

  <a href="https://106.53.61.189/api-v1/swagger" target="_blank">https://106.53.61.189/api-v1/swagger</a>

  ![api-docs](https://github.com/hwadn/website-maker-devtools/assets/43377087/7758e3bb-a611-46a8-bcfa-1d5c2da38220)

#### （3）前端——编辑器

* 项目地址
  
  有性能问题，暂不开源，后面可能会重构

#### （4）前端——组件脚手架

* 项目地址

  <a href="https://github.com/hwadn/website-maker-devtools/tree/master/packages/create-wm-component" target="_blank">https://github.com/hwadn/website-maker-devtools/tree/master/packages/create-wm-component</a>

#### （5）前端——React代码生成

* 项目地址

  <a href="https://github.com/hwadn/website-maker-devtools/tree/master/packages/wm-webpage-codegen" target="_blank">https://github.com/hwadn/website-maker-devtools/tree/master/packages/wm-webpage-codegen</a>

#### （6）前端——SSR

* 项目地址

  <a href="https://github.com/hwadn/website-maker-devtools/tree/master/packages/wm-react-ssr" target="_blank">https://github.com/hwadn/website-maker-devtools/tree/master/packages/wm-react-ssr</a>
