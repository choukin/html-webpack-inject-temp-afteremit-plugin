替换文件内容插件
========================================


Installation
------------
You must be running webpack on node 6.4 or higher

Install the plugin with npm:
```shell
$ npm install --save-dev html-webpack-inject-temp-afteremit-plugin
```

Install the plugin with yarn:
```shell
$ yarn add --dev html-webpack-inject-temp-afteremit-plugin
```

Basic Usage
-----------
Require the plugin in your webpack config:

```javascript
var HtmlWebpackInjectTempalfterEmitPlugin = require('html-webpack-inject-temp-afteremit-plugin');
```

Add the plugin to your webpack config as follows:

```javascript
{
	...
	plugins: [
	  new HtmlWebpackPlugin(),
	  new HtmlWebpackInjectTempalfterEmitPlugin({
		  targetStr: `替换成的内容`,
           sourceStr:`要替换的内容`
        }
	  })
	]
	...
}
```
