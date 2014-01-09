[tiny-binder]
==================================================

A little and light two way model binder for javascript.


[usage]
===========
```js
require(["binder", "jquery"], function(Binder, $){	
	var model = {	
		nombre: "leonardo"
	};

	document.bmodel = Binder.setModel(model);
	
	Binder.setUI("#ui");
	Binder.bind();
	
	Binder.onStateChange(function(newmodel){
		console.log(newmodel);
	});
	
	document.bmodel.nombre("juan");

});
```
