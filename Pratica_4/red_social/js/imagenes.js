document.addEventListener('DOMContentLoaded', async () => {
    const accessKey = 'kZ7-tU2HL59zOAHRfgRsAKWOGq4DIdHq-zZ7_Vcr3O8'; 
    const usedImages = new Set(); 

    // Función para obtener imágenes aleatorias desde la API de Unsplash
    const getRandomImage = async (query) => {
        try {
            const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`);
            const data = await response.json();
            if (data.results && data.results.length > 0) {
                return data.results.map(image => image.urls.regular); // Devuelve URLs de las imágenes
            } else {
                console.warn(`No se encontraron imágenes para la búsqueda: ${query}`);
                return ['img/default-image.jpg']; // img por si falla
            }
        } catch (error) {
            console.error('Error al obtener la imagen:', error);
            return ['img/error-image.jpg']; // img error 
        }
    };

    async function assignUniqueImages(publicaciones) {
        for (const imagen of publicaciones) {
            let imageUrl;
            do {
                // Alterna entre las categorías 'paisajes' y 'publicidad' de forma aleatoria
                const images = await getRandomImage(Math.random() < 5.5 ? 'paisajes' : 'publicidad');
                imageUrl = images[Math.floor(Math.random() * images.length)];
            } while (usedImages.has(imageUrl)); // Verifica si la imagen ya ha sido usada

            usedImages.add(imageUrl); // Agrega la imagen al conjunto de imágenes 
            imagen.src = imageUrl; // Asigna la imagen a cada uno de 
        }
    }

    const publicaciones = document.querySelectorAll('.publicaciones .publicacion .body img.paisaje'); 
    // Aquí asignamos las imágenes para que solo sea única
    await assignUniqueImages(publicaciones);
    const imageIds = ['publi1', 'publi2', 'paisaje2', 'paisaje1']; // IDs de imágenes específicas que necesitan una asignación única

    imageIds.forEach(async (imageId) => {
        const imgElement = document.getElementById(imageId);
        if (imgElement) {
            let imageUrl;
            do {
                // Alterna entre las categorías 'publicidad' y 'paisaje' de forma aleatoria
                const randomCategory = Math.random() < 0.5 ? 'publicidad' : 'paisaje';
                const images = await getRandomImage(randomCategory);
                imageUrl = images[Math.floor(Math.random() * images.length)];
            } while (usedImages.has(imageUrl)); // Verifica si la imagen ya ha sido usada

            usedImages.add(imageUrl); // Agrega la imagen al conjunto de imágenes 
            imgElement.src = imageUrl; // Asigna la imagen a cada uno de 
        } else {
            console.warn(`No se encontró el elemento con ID: ${imageId}`); // Advertencia si no se encuentra el elemento
        }
    });
});
