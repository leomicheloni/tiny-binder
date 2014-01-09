requirejs.config({
	"paths": {
		"jquery": "http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min",
	}
});

require(["binder", "jquery"], function(Binder, $){	
	var model = {	
		nombre: "leonardo"
	};

	document.bmodel = Binder.setModel(model);
	
	Binder.setUI("#ui");
	Binder.bind();
	Binder.onStateChange(function(data){
		console.log(data);
	});
	
	document.bmodel.nombre("juan");
	
	
});