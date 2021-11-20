$(() => {
    $('#leftPanelLink').hide();


});

function iniciarSesion() {

    $.ajax({
        url: URL_BASE + '/usuario/iniciarSesion',
        type: 'POST',
        data: JSON.stringify({
            email: $('#email').val(),
            password: $('#clave').val()
        }),
        dataType: 'json',
        contentType: 'application/json'
    }).done((data) => {
        if (data.code == 200 && data.message == 'SUCCESS') {
            sessionStorage.setItem('usuarioId', data.data.id);
            sessionStorage.setItem('email', data.data.email);

            location.href = 'pages/main.html';
        } else if (data.code == 400) {
            alertify.alert('Mensaje', 'Credenciales inválidas. Intente nuevamente.');
        }
    }).fail((error) => {
        alertify.alert('Mensaje', 'Ha ocurrido un error. Intente nuevamente.');
    });
}
