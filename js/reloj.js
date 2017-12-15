(function functionName() {
    var actualizarHora = function functionName() {
        var fecha = new Date(),
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();

        /*P es por parrafo*/
        var pHoras = document.getElementById('horas'),
            pAMPM = document.getElementById('ampm'),
            pMinutos = document.getElementById('minutos'),
            pSegundos = document.getElementById('segundos'),
            pDiaSemana = document.getElementById('diaSemana'),
            pDia = document.getElementById('dia'),
            pMes = document.getElementById('mes'),
            pYear = document.getElementById('year');

        var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        pDiaSemana.textContent = semana[diaSemana];
        pDia.textContent = dia;
        pMes.textContent = meses[mes];
        pYear.textContent = year;

        // Verificamos si es mas de las 12 para volver a empezar
        if (horas >= 12) {
            horas = horas - 12;
            ampm = 'PM';
        }else {
            ampm = 'AM';
        }
        // Aqui verificamos si es 0 lo muestre como 12 ya que no existe 0 horas
        if(horas == 0){
            horas = 12;
        }

        pHoras.textContent = horas;
        pAMPM.textContent = ampm;

        // Agregaremos que en vez de que aparezca 1 aparezca 01
        if(minutos < 10){
            minutos = "0" + minutos;
        }
        if(segundos < 10){
            segundos = "0" + segundos;
        }

        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;


    };

    actualizarHora();
    var intervalo = setInterval(actualizarHora, 1000);
}())
