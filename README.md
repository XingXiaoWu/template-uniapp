# template-uniapp

## Project setup
```bash
npm install
```
## 运行
```bash
# h5
npm run dev:h5
# 微信小程序
npm run dev:mp-weixin
```
## uniapp配置查看
```bash
# 配置
https://uniapp.dcloud.io/collocation/pages
```

## 注意项

### 1.vuex持久化在小程序内无法使用

### 2.template在小程序中无法直接解析挂载在vue上的属性，如$store等（小程序的模板上下文中，并不是从this.上去拿数据，是从this.data上拿数据，未验证）

### 3.Components中的公共组件，需要以Xing为前缀命名

### 4.Jenkins配置
```bash
npm install --registry=http://npm.ckmooc.com
rm -rf ./dist
npm run build:h5
echo "${Build_on_tag}#${BUILD_TIMESTAMP}" >> ./dist/build/h5/version.html
cp -rf ./dist/build/h5 ./docker/dist
```
## packagejson备份
```json
{
  "name": "template-uniapp",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "npm run dev:h5",
    "build": "npm run build:h5",
    "build:app-plus": "cross-env NODE_ENV=production UNI_PLATFORM=app-plus vue-cli-service uni-build",
    "build:custom": "cross-env NODE_ENV=production uniapp-cli custom",
    "build:h5": "cross-env NODE_ENV=production UNI_PLATFORM=h5 vue-cli-service uni-build",
    "build:mp-360": "cross-env NODE_ENV=production UNI_PLATFORM=mp-360 vue-cli-service uni-build",
    "build:mp-alipay": "cross-env NODE_ENV=production UNI_PLATFORM=mp-alipay vue-cli-service uni-build",
    "build:mp-baidu": "cross-env NODE_ENV=production UNI_PLATFORM=mp-baidu vue-cli-service uni-build",
    "build:mp-kuaishou": "cross-env NODE_ENV=production UNI_PLATFORM=mp-kuaishou vue-cli-service uni-build",
    "build:mp-qq": "cross-env NODE_ENV=production UNI_PLATFORM=mp-qq vue-cli-service uni-build",
    "build:mp-toutiao": "cross-env NODE_ENV=production UNI_PLATFORM=mp-toutiao vue-cli-service uni-build",
    "build:mp-weixin": "cross-env NODE_ENV=production UNI_PLATFORM=mp-weixin vue-cli-service uni-build",
    "build:quickapp-native": "cross-env NODE_ENV=production UNI_PLATFORM=quickapp-native vue-cli-service uni-build",
    "build:quickapp-webview": "cross-env NODE_ENV=production UNI_PLATFORM=quickapp-webview vue-cli-service uni-build",
    "build:quickapp-webview-huawei": "cross-env NODE_ENV=production UNI_PLATFORM=quickapp-webview-huawei vue-cli-service uni-build",
    "build:quickapp-webview-union": "cross-env NODE_ENV=production UNI_PLATFORM=quickapp-webview-union vue-cli-service uni-build",
    "dev:app-plus": "cross-env NODE_ENV=development UNI_PLATFORM=app-plus vue-cli-service uni-build --watch",
    "dev:custom": "cross-env NODE_ENV=development uniapp-cli custom",
    "dev:h5": "cross-env NODE_ENV=development UNI_PLATFORM=h5 vue-cli-service uni-serve",
    "dev:mp-360": "cross-env NODE_ENV=development UNI_PLATFORM=mp-360 vue-cli-service uni-build --watch",
    "dev:mp-alipay": "cross-env NODE_ENV=development UNI_PLATFORM=mp-alipay vue-cli-service uni-build --watch",
    "dev:mp-baidu": "cross-env NODE_ENV=development UNI_PLATFORM=mp-baidu vue-cli-service uni-build --watch",
    "dev:mp-kuaishou": "cross-env NODE_ENV=development UNI_PLATFORM=mp-kuaishou vue-cli-service uni-build --watch",
    "dev:mp-qq": "cross-env NODE_ENV=development UNI_PLATFORM=mp-qq vue-cli-service uni-build --watch",
    "dev:mp-toutiao": "cross-env NODE_ENV=development UNI_PLATFORM=mp-toutiao vue-cli-service uni-build --watch",
    "dev:mp-weixin": "cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch",
    "dev:quickapp-native": "cross-env NODE_ENV=development UNI_PLATFORM=quickapp-native vue-cli-service uni-build --watch",
    "dev:quickapp-webview": "cross-env NODE_ENV=development UNI_PLATFORM=quickapp-webview vue-cli-service uni-build --watch",
    "dev:quickapp-webview-huawei": "cross-env NODE_ENV=development UNI_PLATFORM=quickapp-webview-huawei vue-cli-service uni-build --watch",
    "dev:quickapp-webview-union": "cross-env NODE_ENV=development UNI_PLATFORM=quickapp-webview-union vue-cli-service uni-build --watch",
    "info": "node node_modules/@dcloudio/vue-cli-plugin-uni/commands/info.js",
    "serve:quickapp-native": "node node_modules/@dcloudio/uni-quickapp-native/bin/serve.js",
    "test:android": "cross-env UNI_PLATFORM=app-plus UNI_OS_NAME=android jest -i",
    "test:h5": "cross-env UNI_PLATFORM=h5 jest -i",
    "test:ios": "cross-env UNI_PLATFORM=app-plus UNI_OS_NAME=ios jest -i",
    "test:mp-baidu": "cross-env UNI_PLATFORM=mp-baidu jest -i",
    "test:mp-weixin": "cross-env UNI_PLATFORM=mp-weixin jest -i"
  },
  "dependencies": {
    "@dcloudio/uni-app-plus": "^2.0.0-32920210927002",
    "@dcloudio/uni-h5": "^2.0.0-32920210927002",
    "@dcloudio/uni-helper-json": "*",
    "@dcloudio/uni-i18n": "^2.0.0-32920210927002",
    "@dcloudio/uni-mp-360": "^2.0.0-32920210927002",
    "@dcloudio/uni-mp-alipay": "^2.0.0-32920210927002",
    "@dcloudio/uni-mp-baidu": "^2.0.0-32920210927002",
    "@dcloudio/uni-mp-kuaishou": "^2.0.0-32920210927002",
    "@dcloudio/uni-mp-qq": "^2.0.0-32920210927002",
    "@dcloudio/uni-mp-toutiao": "^2.0.0-32920210927002",
    "@dcloudio/uni-mp-vue": "^2.0.0-32920210927002",
    "@dcloudio/uni-mp-weixin": "^2.0.0-32920210927002",
    "@dcloudio/uni-quickapp-native": "^2.0.0-32920210927002",
    "@dcloudio/uni-quickapp-webview": "^2.0.0-32920210927002",
    "@dcloudio/uni-stat": "^2.0.0-32920210927002",
    "@vue/shared": "^3.0.0",
    "core-js": "^3.6.5",
    "flyio": "^0.6.2",
    "regenerator-runtime": "^0.12.1",
    "vue": "^2.6.11",
    "vuex": "^3.2.0"
  },
  "devDependencies": {
    "@babel/runtime": "~7.12.0",
    "@dcloudio/types": "*",
    "@dcloudio/uni-automator": "^2.0.0-32920210927002",
    "@dcloudio/uni-cli-i18n": "^2.0.0-32920210927002",
    "@dcloudio/uni-cli-shared": "^2.0.0-32920210927002",
    "@dcloudio/uni-migration": "^2.0.0-32920210927002",
    "@dcloudio/uni-template-compiler": "^2.0.0-32920210927002",
    "@dcloudio/vue-cli-plugin-hbuilderx": "^2.0.0-32920210927002",
    "@dcloudio/vue-cli-plugin-uni": "^2.0.0-32920210927002",
    "@dcloudio/vue-cli-plugin-uni-optimize": "^2.0.0-32920210927002",
    "@dcloudio/webpack-uni-mp-loader": "^2.0.0-32920210927002",
    "@dcloudio/webpack-uni-pages-loader": "^2.0.0-32920210927002",
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "babel-plugin-import": "^1.11.0",
    "cross-env": "^7.0.2",
    "jest": "^25.4.0",
    "mini-types": "*",
    "miniprogram-api-typings": "*",
    "postcss-comment": "^2.0.0",
    "vue-template-compiler": "^2.6.11"
  },
  "browserslist": [
    "Android >= 4.4",
    "ios >= 9"
  ],
  "uni-app": {
    "scripts": {}
  }
}
```