const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CommonsChunkPlugin = require("./node_modules/webpack/lib/optimize/CommonsChunkPlugin");

var environments = [
	{
		'id': 'vendor',
		'entry':  [
			'./app/script/vendor/vendor.js',
			'jquery',
			'angular'
		]
	},
	{
		'id': 'util',
		'entry': [
			'./app/script/util/util.js',
			'./app/script/util/resultset.js'
		]
	},
	{
		'id': 'ag',
		'entry': './app/ag/index.js'
	},
	{
		'id': 'sfrc',
		'entry': './app/sfrc/index.js'
	}
];

var config = {
	'entry': {},
	'output': {
		'filename': './[name]/script/index.js',
		'path': path.resolve(__dirname, 'dist')
	},
	'module': {
		'rules': [
			{
				'test': /styles\.less$/, // the 'styles' part seems optional
				'use': ExtractTextPlugin.extract({
					'fallback': 'style-loader',
					'use': 'css-loader!less-loader',
				})
			}/*,
			{
				test: /[\/]angular\.js$/,
				loader: 'exports-loader?angular'
			}*/
		]
	},
	'plugins': [
        new CommonsChunkPlugin({
            'names': [ 'util', 'vendor' ],
            'minChunks': Infinity
        }),
		new ExtractTextPlugin({
			'filename': './[name]/styles/styles.css'
		})
	]
};

environments.forEach(function(env, idx, arr) {
	config.entry[env.id] = env.entry;
});
//console.dir(config);

module.exports = config;

