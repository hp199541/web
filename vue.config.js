'use strict'
const path = require('path')
// const alias = require('alias')
// const defaultSettings = require("./src/settings.js");

function resolve(dir) {
	return path.join(__dirname, dir)
}
//__dirname表示的是当前文件所在位置的绝对路径
// alias.set('st',resolve('src/assets'))

module.exports = {
	publicPath: './',
	// outputDir: '../public/front',
	assetsDir: 'static',
  // lintOnSave: process.env.NODE_ENV === 'development',
  lintOnSave:false,
	productionSourceMap: false,
	devServer: {
		// port: port,
		open: true,
		overlay: {
			warnings: false,
			errors: true,
		},
		proxy: {
			'/api': {
				target: 'http://localhost:3001',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api': '',
				},
			},
		},
		// before: require('./mock/mock-server.js')
	},
	configureWebpack: {
		// provide the app's title in webpack's name field, so that
		// it can be accessed in index.html to inject the correct title.
		// name: name,
		resolve: {
			alias: {
				'@': resolve('src'),
			},
		},
  }
}
