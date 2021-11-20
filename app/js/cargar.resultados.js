$(() => {
    $.ajax({
        url: URL_BASE + '/participacion/list',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json'
    }).done((data) => {
        if (data.code == 200 && data.message == "SUCCESS") {
            let participaciones = data.data.list;

            participaciones = participaciones.filter(p => p.ejercicioId == 1);
            participaciones.sort((x, y) => y.puntaje < x.puntaje ? -1 : y.puntaje > x.puntaje ? 1: 0);
            
            participaciones.forEach(p => {
                let fila = $('<tr>');
                let fecha = new Date(p.fecha);
                fila.append(`<td>${p.puntaje}</td>`);
                fila.append(`<td>${fecha.getFullYear()}/${fecha.getMonth() + 1}/${fecha.getDate()}</td>`);
                fila.append(`<td>${p.nivelId}</td>`);

                $('#puntajesEjercicio1').append(fila);
            });
            
        } else if (data.code == 400) {
            alertify.alert('Mensaje', 'Problema al iniciar el juego.');
        }
    }).fail((error) => {
        alertify.alert('Mensaje', 'Problema al iniciar el juego.');
    });
});