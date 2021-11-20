function validar2() {
    const input = document.getElementById('campo');
    console.log('dfffff');

    $(() => {
        $('#leftPanelLink').hide();
    
        $('#registro').on('submit', function (evento) {
            evento.preventDefault();
    
            $.ajax({
                url: URL_BASE + '/usuario/add',
                type: 'POST',
                data: JSON.stringify({
                    id: $('#id').val(),
                    cedula: $('#cedula').val(),
                    nombre1: $('#nombre1').val(),
                    nombre2: $('#nombre2').val(),
                    apellido1: $('#apellido1').val(),
                    apellido2: $('#apellido2').val(),
                    telefono: $('#telefono').val(),
                    direccion: $('#direccion').val(),            
                    email: $('#email').val(),
                    password: $('#password').val()
                }),
                dataType: 'json',
                contentType: 'application/json'
            }).done((data) => {
                console.log(data);
                if (data.code == 200) {
                    alertify.alert('Mensaje', 'Registro satisfactorio', function () {
                        location.href = 'index.html';
                    });
                } else {
    
                }
            }).fail((error) => {
                alertify.alert('Mensaje', 'Ha ocurrido un error. Intente nuevamente.');
            });
    
            return false;
        });
        
    });
  }

