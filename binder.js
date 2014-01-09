define(["jquery"], function($){
	var Binder = function(){
	};

	Binder.prototype.model = null;
	Binder.prototype.UI = null;
	Binder.prototype.bmodel = {
	};
	Binder.prototype.onStateChangeHandler = null;
	Binder.prototype.onStateChange = function(handler){
		this.onStateChangeHandler = handler;
	};
	
	Binder.prototype.stateChange = function(data){
		if(this.onStateChangeHandler) this.onStateChangeHandler(data);
	};
	
	Binder.prototype.setModel = function(model){
		this.model = model;
		var that = this;
		for(var prop in this.model){
			var $element = $("[data-bind='" + prop + "']");
			this.bmodel[prop] = function(value){
				if(value){
					//update UI
					$element.val(value);
				}else{
					return this.model[prop];
				}
			};
			
			$element.blur(function(){
				var value = $element.val();
				that.model[prop] = value;
				that.stateChange({prop: prop, value: value});
			});
		}
		
		return this.bmodel;
	};
	
	Binder.prototype.setUI = function(selector){
		this.UI = $(selector);
	};
	
	Binder.prototype.bind = function(){
		var elements = $("[data-bind]");
		var that = this;
		
		elements.each(function(index, item){
			var name = $(item).attr("data-bind");
			
			var value = that.model[name];
			$(item).val(value);
		});
	};
	
	/*Binder.prototype.getPropertyValue = function(name){
		var value = model[name];
	}*/
	
	return new Binder();
});