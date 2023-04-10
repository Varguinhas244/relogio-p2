



function relogio() {
    const espacoRelogio = document.querySelector(".relogio");

    const horaAgora = new Date();

    const horas = horaAgora.getHours();

    const minutos = horaAgora.getMinutes();

    const segundos = horaAgora.getSeconds();

    const formatoHora = horas.toString().padStart(2, "0");

    const formatoMinutos = minutos.toString().padStart(2, "0");

    const formatoSegundos = segundos.toString().padStart(2, "0");

    espacoRelogio.textContent = `${formatoHora}:${formatoMinutos}:${formatoSegundos}`;

    const frase = document.querySelector(".frase")

    dia = new Array('Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado');

    mes = new Array('janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro');

    hoje = new Date() 

    frase.innerHTML = `${dia[hoje.getDay()]},  ${hoje.getDate().toString().padStart(2, 0)} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()} `


    if (formatoHora >= 00 && formatoHora < 12) {

        document.body.style.backgroundImage = 'url(https://img.olhardigital.com.br/wp-content/uploads/2019/08/20190830055344.jpg)'
        document.body.style.color = 'red'
        document.body.style.backgroundSize = 'cover'
        img.src = "img/img1.png"
        img.width = 650
        img.height = 500






    }

    else if (formatoHora >= 12 && formatoHora < 18) {
        document.body.style.backgroundImage = 'url(https://www.apptuts.net/wp-content/uploads/2016/12/windows-10.jpg)'
        document.body.style.color = 'yellow'
        document.body.style.backgroundSize = 'cover'
        img.src = "img/img2.png"
        img.width = 450
        img.height = 500

    }

    else {
        document.body.style.backgroundImage = 'url(https://s2.glbimg.com/6VyBKVon5j6Ofdc70Yt9c1FTlvk=/0x0:695x521/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/9/Q/4z9FL4T1G7MKHrl1AYpg/2014-04-11-bliss.jpg)'
        document.body.style.color = 'blue'
        document.body.style.backgroundSize = 'cover'
        img.src = "img/img3.png"
        img.width = 150
        img.height = 350

    }
}





setInterval(relogio, 1000)
// usado para ativar um função relacionada ao tempo
// 1000 = quantidade de milisegundos






