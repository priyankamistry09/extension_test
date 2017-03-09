var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('blteec8a61f272d535e')
// .setHost('localhost')
// .setPort(8000)
.setHost("f6b7a2b3.ngrok.io")
.setProtocol("https")
// .setPort(80)
.setMasterKey('blte09616313f4eaf7a')

var extensionSDK = app.Extension({
	secret_key     : 'bltc72eecc6220abbd2',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


