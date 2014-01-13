$(function(){	
	var binder = new Binder("#ui");

	var model = binder.setModel({	
		nombre: "leonardo"
	});

	binder.bind();

	binder.onStateChange(function(newmodel){
		console.log(newmodel);
	});

	model.nombre("juan");
});	
	
