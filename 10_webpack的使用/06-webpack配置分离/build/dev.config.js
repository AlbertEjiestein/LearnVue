const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

// 开发依赖
module.exports = webpackMerge(baseConfig,{
  devServer:{
    contentBase:'./dist',  // 为dist文件夹提供服务
    inline:true
  }
})