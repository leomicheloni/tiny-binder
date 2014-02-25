var start = (function(){	
	var binder = new Binder("#ui");

	var model = binder.setModel({	
		nombre: "leonardo",
		DNI: 3333333
	});

	binder.bind();
});	
	
