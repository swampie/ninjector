exports = module.exports = Context
var ctx = Context.prototype;

var ninjector;

Object.prototype.new = function(){
	var args = arguments;
	var constructor = this;
	function Object(){
		constructor.apply(this,args);
	}
	Object.prototype = constructor.prototype
	return new Object();
}


function Context(ninjector){
		this.ninjector = ninjector;
}


ctx.add = function(beans,cb){
		var that = this;
		beans.forEach(function(b){
				var module = that.getModule(b.module);
				//Constructor injection
				console.log(module)
				module.new(b.properties);
		});	
	}
 
 ctx.getModule = function(module){
  console.log(module);
 //regexp for property placeholder
	return require(module);
	
 }



