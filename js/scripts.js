$('#submit_form').on('submit', function(e) {

    e.preventDefault();

    var nombres = $('input[name="nombres"]').val();
    var apellidos = $('input[name="apellidos"]').val();
    var direccion = $('input[name="direccion"]').val();
    var usuario = $('input[name="usuario"]').val();
    var password = $('input[name="password"]').val();
    /*
    if (nombres == '' || nombres.length > 25) {
    	alert("Por favor ingresa tús nombres y verifica que no sea mayor de 25 caracteres.");
    }
    if (apellidos == '' || apellidos.length > 25) {
    	alert("Por favor ingresa tús apellidos y verifica que no sea mayor de 25 caracteres.");
    }
    firstwords = new Array("cll", "cra", "av", "anv", "trans");
    firstword = direccion.split(' ')[0].toLowerCase();
    console.log(firstword);
    if(!(firstwords.indexOf(firstword) != -1)){
    	alert("Debes ingresar una dirección que empiece por cll, cra, av, anv, trans.");
    }

    if (usuario == '' || usuario.length > 20 || usuario.length < 10) {
    	alert("Por favor verifica que el usuario ingresado tenga de 10 a 20 caracteres.");
    } else if (!/^[a-zA-Z]*$/g.test(usuario)) {
    	alert("Parece que tienes caracteres invalidos.")
    }
	*/

    if (password == '' || password.length > 20 || password.length < 15) {
    	alert("Por favor verifica que el password ingresado tenga de 15 a 20 caracteres.");
    } else if (!/^(?=.[a-zA-Z])(?=.\d)(?=.[!@#$%^&()+])[A-Za-z\d!@#$%^&*()+]{10,15}/.test(password)) {
    	alert("Tu clave deberia ser más segura");
    }


});