/**
 * 第一种jquery插件开发方式
 */
$.extend({
	sayHello : function(name){
		console.log('Hello ' + (name ? name : 'George') + '!');
	}
});

$.sayHello();
$.sayHello("xiaohui");

$.extend({
	log : function(message){
		var now = new Date(),
			y = now.getFullYear(),
			m = now.getMonth() + 1,
			d = now.getDate(),
			h = now.getHours(),
			min = now.getMinutes(),
			s = now.getSeconds(),
			time = y + '/' + m + '/' + d + ' ' + h + ':' + min + ':' + s;
		console.log(time + ' My App: ' + message);
	}
});

$.log('initializing...');


/**
 * 第二种jquery插件开发方式
 */
 ;(function($, window, document, undefined){
	var Beautifier = function(ele, opt){
		this.$element = ele,
		this.defaults = {
			'color' : 'red',
			'fontSize' : '12px',
			'textDecoration' : 'none'
		},
		this.options = $.extend({}, this.defaults, opt)
	}

	Beautifier.prototype = {
		beautify : function(){
			return this.$element.css({
				'color' : this.options.color,
				'fontSize' : this.options.fontSize,
				'textDecoration' : this.options.textDecoration
			});
		}
	}

	$.fn.myPlugin = function(options){
		var beautifier = new Beautifier(this, options);

		return beautifier.beautify();
	}
 })(jQuery, window, document);
