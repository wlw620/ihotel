var config = require("./webpack.config.js");
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
config.entry.app.unshift("webpack-dev-server/client?http://localhost:8888/");
var compiler = webpack(config);
var server = new WebpackDevServer(compiler);
server.listen(8888);
