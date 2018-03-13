# react-redux-example 
中中信息公司用来新人前端框架培训的简单代码

---
## 使用 create-react-app 生成项目架构
- 1.安装 create-react-app 以上
```shell
npm install -g create-react-app
```
- 2.生成项目架构

```shell
npx create-react-app react-redux-example 
```
> 注意：npm 版本需要在 5.0 以上

- 3.在 项目的根目录下执行命令，“弹射”出配置
```shell
npm run eject
```
> 注：在“弹射”之前，不能将项目的 git 仓库定位到 github 上，否则将无法“弹射”


## 增加 antd 相关支持

- 1.安装 antd 
```
npm install -g antd
```
> 注：我这里配置了 package.json 中进行本地安装。之前发现全局安装出现 antd 样式找不到的问题，该问题暂时不明确。

- 2.安装 babel-plugin-import 如果想让 antd 的组件按需加载，需要安装 babel-plugin-import 组件并修改 babel 配置。
```
npm install -g babel-plugin-import
``
修改 webpack.config.dev.js 文件的 babel 配置如下：
``` javascript
{
    test: /\.(js|jsx|mjs)$/,
    include: paths.appSrc,
    loader: require.resolve('babel-loader'),
    options: {
        "plugins": [
        ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }] // `style: true` 会加载 less 文件
        ],
        // This is a feature of `babel-loader` for webpack (not Babel itself).
        // It enables caching results in ./node_modules/.cache/babel-loader/
        // directory for faster rebuilds.
        cacheDirectory: true,
    },
},
```