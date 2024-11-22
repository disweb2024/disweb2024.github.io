// script.js
document.querySelectorAll('.menu-list a').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace

        // Pausar todos los audios
        document.querySelectorAll('audio').forEach(audio => {
            audio.pause();
            audio.currentTime = 0; // Reinicia el audio
        });

        // Pausar el video actual
        const video = document.getElementById('dynamic-video');
        video.pause();
        video.style.display = 'none'; // Ocultar el video

        // Reproducir el audio correspondiente
        const audioId = item.getAttribute('data-audio');
        const audio = document.getElementById(audioId);
        if (audio) {
            audio.play();
        }

        // Cambiar el video correspondiente
        const videoSrc = item.getAttribute('data-video');
        if (videoSrc) {
            video.src = videoSrc;
            video.style.display = 'block'; // Mostrar el video
            video.play(); // Reproducir el video
        }

        // Minimizar el menú
        const menu = document.getElementById('menu-footer');
        menu.classList.add('minimized');
    });
});

// Toggle para mostrar/ocultar el menú
document.getElementById('toggle-menu').addEventListener('click', () => {
    const menu = document.getElementById('menu-footer');
    menu.classList.toggle('minimized');
});
