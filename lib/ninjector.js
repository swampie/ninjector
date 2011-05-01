/**
* Requires
**/
path = require('path');
fs = require('fs');
util = require('util')
exports = module.exports = Ninjector

var ninjector = Ninjector.prototype;
Context = require('./ctx');

function Ninjector(options){
	this.init(options);
}

ninjector.init = function(options){
	var self = this;
	var beans = {}
	this.profile =  process.env.NODE_ENV || 'development';
	if(!options){
		self.fail('Ninjector needs a configuration object');
	}
	
	if(typeof options == 'string'){
		var ext = path.extname(options)
		var file = path.basename(options,ext);
		var e = path.resolve(options);
		if(!path.existsSync(e)){self.fail('file '+e+' does not exists')};
		//This is not needed
		if(!ext == 'json'){self.fail('conf file must be a json')}
		/**
		*	Parsing configuration file
		*	TODO: move to configurator 
		**/
		var fileContent = fs.readFileSync(e)
		
		if(fileContent == '') self.fail('Configuration fail seems empty');
		
		var configurator = {}
		try {
			configurator = JSON.parse(fileContent);
			
		}catch(err){
			self.fail('Unable to parse JSON configuration','Configuration');
		}
		self.ctx = new Context().add(configurator.beans,self.postContext)
		
		
		
	}else if(typeof options === 'object'){
		self.fail('Not implemented yet!');
	}
	
    console.log('Starting ninjector in '+ this.profile + ' mode');	
}

ninjector.fail = function(reason,module){
	if(!module) module = 'Ninjector'
	throw new Error('>>'+module+":"+reason);
}

exports.startNinjector = function(options){
	return new Ninjector(options);
}


