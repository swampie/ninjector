  var  fs = require("fs"),
	path = require("path"),
	schema = require("../lib/schema/beans.js"),
	assert = require('assert');
var fileContent = fs.readFileSync(path.resolve('./ninjectorFake.json'));
var data = JSON.parse(fileContent);
data.beans.forEach(function(b){
	assert.strictEqual(
		schema.validate(b).isError(),
    false
	);
});
