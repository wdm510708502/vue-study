# cli-basis

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

1、一级目录：
build和config文件夹是wbepack配置的文件夹；
node_modules是在我npm install后存放一些依赖和插件的文件夹；
src是存放我们项目源码的文件，通常我们的vue组件就写在这里，其中main.js是页面的入口文件，初始化vue实例并使用需要的插件【插件router、resource等】，而App.vue看作是一个大组件，也就是整个页面的vue实例文件；
static是存放第三方静态资源的，比如css的reset.css等等。
2、二级目录：
.babelrc是Es6语法的一些转换配置，其中presets是预设，plugins是转换的插件，comments的值如果为false，表示转换后不生成注释；
.editorconfig是编辑器的配置，它配置了一些语言，缩进的风格大小，换行符风格等等；
.eslintignore是忽略语法检查的目录文件，一般是build/*.js、config/*.js这两个文件；
.eslintrc.js是eslint的配置文件，其中extends: 'standard'表示标准规则，如：要求===之类的；‘rule’表示配置具体的规则，我们改eslint就在这个下面进行修改，如：// 没有分号就报错  'semi': ['error', 'always']或者忽略某种检查，将值设为0即可；
index.html是入口文件，js和css会被动态的插入这个文件；
package.json定义了整个项目所需要的这种模块，以及项目的配置信息。



# vue调用顺序(初学版) index.html → main.js → app.vue → index.js → components/组件 测试