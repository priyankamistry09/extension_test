var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('blteec8a61f272d535e')
.setHost('17988c9f.ngrok.io')
.setProtocol("https")
.setMasterKey('blte7d3652a2feabf38')

var extensionSDK = app.Extension({
	secret_key     : 'blt123blt123',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


