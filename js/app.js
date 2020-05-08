$(document).ready(function () {

    var i = 1;
    var fila = $('.tabla tbody');
    

    $('#enviar').click(function (e) {  
        var nombre = $('#nombre').val();
        var cantidad = parseInt($('#cantidad').val());
        var precio = parseFloat($('#precio').val());
        var pIva = parseFloat(precio - (precio * 0.13));
        var total = parseFloat(pIva * cantidad);       
        e.preventDefault();        
        fila.append(`<tr><td>${i}</td><td>${nombre}</td><td>${cantidad}</td><td>$${precio}</td><td>$${pIva}</td><td>$${total}</td></tr>`); 
        i++;
    });

    var modo = $('#modo');
    modo.click(function (e) { 
        e.preventDefault();
        $('.topic').css('background', '#3a3b33');
        $('.contenido').css('background', '#3a3b33');
        $('.sidebar').css('background', '#3a3b33');
        $('.sidebar div').css('background', '#1d1d18');
        $('.container').css('color', 'white');
        $('.tabla').css('color', 'white');
        $('.pie').css({background: '#3a3b33', color: 'white'});
    });
});



    
