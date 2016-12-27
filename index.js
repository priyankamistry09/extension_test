var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('blteec8a61f272d535e')
.setHost('localhost')
.setProtocol('http')
.setPort(8000)
.setMasterKey('blt123blt123')

var extensionSDK = app.Extension({
	// secret_key     : '',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


