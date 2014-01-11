requirejs.config({
	"paths": {
		"jquery": "http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min",
	}
});

require(["binder", "jquery"], function(Binder, $){	
	var model = {	
		nombre: "leonardo"
	};

	var binder = new Binder();

	document.bmodel = binder.setModel(model);
	
	binder.setUI("#ui");
	binder.bind();
	
	binder.onStateChange(function(newmodel){
		console.log(newmodel);
	});
	
	document.bmodel.nombre("juan");
	
	
})