$.extend({
	sayHello : function(name){
		console.log('Hello ' + (name ? name : 'George') + '!');
	}
});

$.sayHello();
$.sayHello("xiaohui");