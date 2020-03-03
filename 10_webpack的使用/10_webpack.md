### webpack打包
+ 打包是指可以将图片压缩，文件合并，文件转换(比如ES6转为ES5,scss less 转为css)
+ 浏览器是不认识AMD\CMD\COMMONJS\ES6模块化规范的，只有打包成浏览器认识的js代码才可以
+ webpack打包时不需要打包所有文件，只需要打包main.js，webpack工具会自动去处理模块之间的依赖，关联所有的模块到一个文件中
+ webpack可以打包各种模块化规范文件
+ 打包命令：webpack .\src\main.js ./dist/bundle.js

### webpack配置文件
+ webpack.config.js
+ 命令行执行webpack，会自动去找上边这个文件 
+ 输出文件路径必须是绝对路径，用到path库：path.resolve(__dirname,'dist')

### package.json配置
+ 终端的webpack等及其他命令都是用的全局的
+ 通过npm run build来启动webpack命令，用的是局部的，build命令在package.json的scripts里一一对应
+ 局部安装包：npm install 包 --save-dev/--save
+ --save-dev：package.json里面有个devDependencies(开发环境依赖)
+ --save:dependencies(生产环境依赖)
+ package.json的script的脚本在运行时，会首先运行node_module/bin里面的命令，如果没有再去全局找

### loader
+ 为什么要loader？
+ webpack本身只支持自动处理js之间相关的依赖
+ 对于ES6->ES5，ts->ES5，scss less -> css，.jsx .vue -> js，webpack的扩展loader可以转化
+ 直接在main.js中导入.css文件会出错："You may need an appropriate loader to handle this file type."，因为webpack无法解析.css文件
+ 需要安装css-loader，然后在webpack.config.js中module属性下配置，以和js文件一起打包到bundle.js中
+ 但是install 了css-loader之后，发现css未生效，这是因为css-loader只负责加载css，还需要安装style-loader，将css设置解析到DOM中
  
+ 依赖less文件时：
+ 首先安装：npm install --save-dev less-loader less   less是负责将less->css
+ 添加配置：webpack.config.js的module下

+ 加载图片时：
+ 首先安装：npm install --save-dev url-loader
+ 当加载的图片大小大于limit时，需要安装file-loader，但是这种情况下，图片会作为一整个文件复制到dist目录下，并重新哈希命名
+ 当图片大于limit时，需要配置图片加载地址，用户加载图片默认加载的是打包之后的图片，而开发的src文件夹中加载图片路径为未打包路径，故需要修改加载图片路径为打包后的路径

+ publicPath:'/dist' 表示打包后所有带url访问的前边都会自动加上dist目录

+ 另外option中,图片命名方式：name:'img/[name].[hash:8].[ext]'

+ ES6 -> ES5
+ 需要安装babel：npm install babel-loader@7 babel-core babel-preset-es2015

+ 在webpack中使用vue
+ 首先使用npm安装：运行依赖  vue-loader
+ 但是运行发现，vue中的数据无法在模板中显示，原因是指定的vue版本不对，需要修改指定版本
+ runtime-only->代码中，不可以有任何的template
+ runtime-complier->代码中，可以有template，因为有complier可以用于编译template
+ 在配置文件中，指定要使用的vue版本

+ 创建vue时，template和el的关系
+ 如果我们希望将data中的数据显示在界面中，必须是修改index.html
+ 如果后边自定义了组件，也必须修改index.html来使用组件
+ 但是html在之后的开发中，我们并不希望频繁手动修改，因此需要在main.js的vue实例中定义template属性
+ 同时有template和el，前者会替换后者，好处是不需要手动修改html

+ vue的终极使用方案
+ 模板、js、样式分离：使用.vue文件
+ webpack要想识别并加载.vue文件，需安装：npm install vue-loader vue-template-compiler --save-dev
+ 安装完loader之后，都是需要到配置文件中配置一下
+ 配置完之后还是报错，缺少插件，原因是vue-loader版本问题，需要到package.json中修改版本为13.0.0，然后重新npm install


### plugin
+ 与loader的区别：loader主要是转换某些类型的模块，是一个转换器
+ plugin是对webpack本身的扩展，是一个扩展器

+ 使用过程：
+ 1.npm安装需要使用的plugins
+ 2.在webpack.config.js中的plugins中配置插件

### HtmlWebpackPlugin插件自动生成index.html
+ 安装：npm install html-webpack-plugin --save-dev
+ 配置：plugins : new HtmlWebpackPlugin
+ 可以将index.html文件也打包到dist文件夹中
+ 打包的时候会自动将bundle.js打包到index.html中


### uglifyjs-webpack-plugin插件进行压缩
+ 安装：npm install uglifyjs-webpack-plugin@1.1.1 --save-dev
+ 配置：new UglifyfyWebpackPlugin()

### 搭建本地服务器
+ 安装：npm install webpack-dev-server@2.9.3 --save-dev   此处的dev-server版本和webpack对应
+ dev作为webpack配置的一个选项
  - contentBase:''  // 为哪一个文件夹提供本地服务，默认根文件夹
  - port:端口号
  - inline:true/false // 页面实时刷新
  - historyApiFallback:在SPA页面中，依赖HTML5的history模式

+ 启动服务器命令：webpack-dev-server(全局命令)
+ 或者：./node_modules/.bin/webpack-dev-server
+ 或者：在package.json中的script中，设置"dev":"webpack-dev-server"，会优先从局部找命令
  - 设置"dev":"webpack-dev-server --open" 自动打开localhost:8080网页


### webpack配置分离
+ 将webpack.config.js分离为开发依赖和运行依赖
+ 安装：npm install webpack-merge --save-dev
+ 合并基本配置和开发配置或者生产配置：webpackMerge()
+ 修改配置文件路径
+ "build": "webpack --config ./build/prod.config.js",
+ "dev": "webpack-dev-server --open --config ./build/dev.config.js"

