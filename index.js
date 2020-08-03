'use strict';

// const HtmlWebpackPlugin = require('html-webpack-plugin');


 
class HtmlWebpackInjectTempalfterEmitPlugin {
    constructor(options){
        this.options = options
    }
    apply (compiler) {
        // 插件逻辑 调用compilation提供的plugin方法
        const sourceStr = this.options.sourceStr
        const targetStr = this.options.targetStr 
        // console.log(this.options,'this.options')
        compiler.hooks.compilation.tap('HtmlWebpackInjectTempalfterHtmlPlugin', 
        (compilation, callback) => {

          compilation.plugin(
            "html-webpack-plugin-after-html-processing",
            function(htmlPluginData, callback) {
                // console.log(targetStr,'targetStr')
                // console.log(htmlPluginData)
               
              let resultHTML = htmlPluginData.html.replace(sourceStr, targetStr);
              // 返回修改后的结果
              htmlPluginData.html = resultHTML;
            }
          );
        }
      );        
    }
  }
  
  module.exports = HtmlWebpackInjectTempalfterEmitPlugin
