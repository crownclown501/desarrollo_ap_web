document.addEventListener('DOMContentLoaded', async () => {
    const accessKey = 'kZ7-tU2HL59zOAHRfgRsAKWOGq4DIdHq-zZ7_Vcr3O8';
    const usedImages = {};

    const getRandomImage = async (query) => {
        try {
            const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`);
            const data = await response.json();
            return data.results?.map(image => image.urls.regular) || ['img/default-image.jpg'];
        } catch (error) {
            console.error('Error al obtener la imagen:', error);
            return ['img/error-image.jpg'];
        }
    };

    const assignUniqueImages = async (nombres) => {
        for (const nombre of nombres) {
            let image;
            do {
                const images = await getRandomImage('retrato');
                image = images[Math.floor(Math.random() * images.length)];
            } while (Object.values(usedImages).includes(image));

            usedImages[nombre] = image;
        }

        nombres.forEach(nombre => {
            const imgElements = document.querySelectorAll(`[id^="${nombre}"]`);
            imgElements.forEach(imgElement => {
                imgElement.src = usedImages[nombre];
            });
        });
    };

    const nombres = ['p_alejandro', 'p_steph', 'p_cesar', 'p_manuel'];
    await assignUniqueImages(nombres);
});
