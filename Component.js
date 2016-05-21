// 组建

// this内的属性和propotype上的属性有什么区别
;(function() {
	var noFunc = function() {}

	function Component(config) {
		var render = config['render'] || noFunc;
		var bindEvent = config['bindEvent'] || noFunc;

		this.init = function(parent) {
			if(!(parent instanceof Node)) {
				console.error('Component\'s init param have to a DOM')
				return false;
			}
			render(parent)
			bindEvent(parent);
		}
	}

	window['Component'] = Component;
})()

