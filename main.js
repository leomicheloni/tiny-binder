$(function(){	
	var binder = new Binder("#ui");

	var model = binder.setModel({	
		nombre: "leonardo",
		DNI: 3333333
	});

	binder.bind();

	binder.onStateChange(function(newmodel){
		console.log(newmodel);
	});

	model.nombre("juan");
});	
	
