(function (){ 
	
	Binder = function(uiSelector){
		if(uiSelector){
			this.setUI(uiSelector);
		}
	};

	Binder.prototype._model = null,
		
	Binder.prototype.UI = null;

	Binder.prototype.setModel = function(model){
		this._model = model;
	};

	Binder.prototype.setUI = function(selector){
		this.UI = $(selector);
	};

	Binder.prototype._trySetValue = function(item, value){
		var $item = $(item);
		$item.val(value);
		if($item.val() === value) return;
		$item.text(value);
	};

	Binder.prototype.bind = function(){
		var elements = $("[data-bind]");
		var that = this;
		
		elements.each(function(index, item){
			var name = $(item).attr("data-bind");			
			var value = that._model[name];
			that._trySetValue(item, value);
		});
	};

	if ( typeof define === "function" && define.amd ) {
		define( "binder", [], function () { return Binder; } );
	}
}());