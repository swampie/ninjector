var Schema = require('schema')

var beans = Schema.create({
	type:'object',
			properties:{
					module:{
						type:'string',
						optional:false
					},
					id:{
						type:'string',
						optional:false
				}
			}
		
	
});
exports = module.exports = beans;