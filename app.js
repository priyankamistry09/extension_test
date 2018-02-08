var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('blt1387b1f751b602e0')
// .setHost('localhost')
// .setPort(8000)
.setHost("test-stag-api.built.io")
.setProtocol("https")
// .setPort(80)
.setMasterKey('blt8bcfca5f57ba5314')

var extensionSDK = app.Extension({
	secret_key     : 'altamash',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)
