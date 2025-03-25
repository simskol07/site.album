const photos = {
    meninas: {
    "Festa 1": ["img/meninas1.jpg", "img/meninas2.jpg"],
    "Festa 2": ["img/meninas3.jpg", "img/meninas4.jpg"]
    },
    meninos: {
    "Evento A": ["img/meninos1.jpg", "img/meninos2.jpg"],
    "Evento B": ["img/meninos3.jpg", "img/meninos4.jpg"]
    }
    };
    
    function showGallery(category) {
    let container = document.getElementById("gallery-container");
    container.innerHTML = `<h2>${category.charAt(0).toUpperCase() + category.slice(1)}</h2>`;
    
    Object.keys(photos[category]).forEach(event => {
    let eventSection = document.createElement("div");
    eventSection.innerHTML = `<h3>${event}</h3>`;
    eventSection.classList.add("gallery");
    
    photos[category][event].forEach(photo => {
    let img = document.createElement("img");
    img.src = photo;
    eventSection.appendChild(img);
    });
    
    container.appendChild(eventSection);
    });
    }
    