const path = require('path');

module.exports = {
  entry:"./src/main.js",
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename:'bundle.js',
    // 所有url访问的路径都会在前边加上dist
    publicPath:'dist/'
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        // css-loader负责加载css文件
        // style-loader负责将样式添加到dom中
        // 使用多个loader时，webpack是从右向左使用的
        use:[ 'style-loader','css-loader' ]
      },
      {
        test:/\.less$/,
        use:[ 'style-loader', 'css-loader', 'less-loader' ]
      },
      {
        test:/\.(png|jpg|gif)$/,
        use:[
          {
            loader:'url-loader',
            options:{
              // 当加载的图片小于limit时，会将图片编码成base64字符串形式
              // 当加载的图片大于limit时，需要使用file-loader进行加载
              limit:16000,
              name:'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test:/\.js$/,
        exclude:/(node_modules|bower_components)/,
        use:{
          loader: 'babel-loader',
          options:{
            presets:['es2015']
          }
        }  
      },
      {
        test:/\.vue$/,
        use:['vue-loader']
      }
    ]
  },
  resolve:{
   alias:{
     'vue$':'vue/dist/vue.esm.js'
   } 
  }
}