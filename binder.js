(function (){ 
	
	Binder = function(uiSelector){
		if(uiSelector){
			this.setUI(uiSelector);
		}
	};

	Binder.prototype._model = null,
		
	Binder.prototype.UI = null;

	Binder.prototype.model = {
	};

	Binder.prototype.onStateChangeHandler = null;

	Binder.prototype.onStateChange = function(handler){
		this.onStateChangeHandler = handler;
	};

	Binder.prototype.stateChange = function(data){
		if(this.onStateChangeHandler) this.onStateChangeHandler(data);
	};

	Binder.prototype.setModel = function(model){
		this._model = model;
		var that = this;
		for(var prop in this._model){
			var $element = $("[data-bind='" + prop + "']");
			this.model[prop] = function(value){
				if(value){
					//update UI
					$element.val(value);
				}else{
					return this._model[prop];
				}
			};
			
			$element.blur(function(){
				var value = $element.val();
				that._model[prop] = value;
				that.stateChange({prop: prop, value: value});
			});
		}
		
		return this.model;
	};

	Binder.prototype.setUI = function(selector){
		this.UI = $(selector);
	};

	Binder.prototype.bind = function(){
		var elements = $("[data-bind]");
		var that = this;
		
		elements.each(function(index, item){
			var name = $(item).attr("data-bind");
			
			var value = that._model[name];
			$(item).val(value);
		});
	};

	if ( typeof define === "function" && define.amd ) {
		define( "binder", [], function () { return Binder; } );
	}
}());