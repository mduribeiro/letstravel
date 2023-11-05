// Comentario en español

document.getElementById('scrollButton').addEventListener('click', ScrollUp);

function ScrollUp() {
    // Obtiene la posición actual del desplazamiento en la página
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    // Si la posición actual es mayor que 0, realiza el desplazamiento suave hacia arriba
    if (currentScroll > 0) {
        window.requestAnimationFrame(ScrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 20));
    }
}


// Obtiene la fecha actual y le suma 23 horas para establecer la fecha límite del contador
const countdownDate = new Date();
countdownDate.setHours(countdownDate.getHours() + 23);

// Obtiene el elemento del DOM que mostrará el contador
const countdownElement = document.getElementById('countdown');
// Establece un intervalo para actualizar el contador cada segundo
const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    // Obtiene la fecha y hora actuales
    const now = new Date().getTime();
    // Calcula la distancia entre la fecha límite y la fecha y hora actuales
    const distance = countdownDate - now;

    // Calcula las horas, minutos y segundos restantes
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Formatea el tiempo en una cadena con dos dígitos para las horas, minutos y segundos
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // Actualiza el contenido del elemento del contador con el tiempo formateado
    countdownElement.textContent = formattedTime;

    // Si la distancia es menor que 0, la promoción ha terminado, se limpia el intervalo y se muestra el mensaje correspondiente
    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.textContent = '¡It starts now!';
    }

    
}


