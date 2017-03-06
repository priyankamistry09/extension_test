var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('blt59e11ffebf12e235')
// .setHost('localhost')
// .setPort(8000)
.setHost("dev-api.built.io")
.setProtocol("https")
// .setPort(80)
.setMasterKey('blt15bc6f337fbe88bc')

var extensionSDK = app.Extension({
	secret_key     : 'blt917c46b3de8e419f',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


