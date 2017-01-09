var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('blteec8a61f272d535e')
// .setHost('localhost')
// .setPort(8000)
.setHost("f0fe53b4.ngrok.io")
.setProtocol("http")
.setMasterKey('blte7d3652a2feabf38')

var extensionSDK = app.Extension({
	secret_key     : 'blt123blt123',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


