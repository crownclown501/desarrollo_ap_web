document.addEventListener('DOMContentLoaded', () => {
    async function loadest() {
        const response = await fetch('estadisticas_ex/est.json'); 
        const est = await response.json();
        return est;
    }

    // Función para animar el conteo
    function animateCount(element, ini, fin, duration) {
        let iniTime = null;

        const animate = (currentTime) => {
            if (!iniTime) iniTime = currentTime;
            const timeElapsed = currentTime - iniTime;
            const progress = Math.min(timeElapsed / duration, 1); // Asegurate de que no supere 1
            const currentCount = Math.floor(progress * (fin - ini) + ini);
            element.innerText = currentCount;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.innerText = (element.id === 'ingresos') ? `$${fin}` : fin;
            }
        };

        requestAnimationFrame(animate);
    }

    loadest().then(est => {
        const duration = 2000;
        setTimeout(() => {
            animateCount(document.getElementById('visitas'), 0, est.visitas, duration);
            animateCount(document.getElementById('registros'), 0, est.registros, duration);
            animateCount(document.getElementById('ingresos'), 0 ,est.ingresos, duration);
        }, 1000); // toempo de carga 4 segundos se puede óner mas o menos todo esta en milisegundos 
    }).catch(error => {
        console.error('Error al cargar los datos:', error);
    });
});