function updateImageSrc() {
    const img = document.querySelector('header-img');
    const windowWidth = window.innerWidth;

    if (windowWidth >= 600 && windowWidth <= 768) {
        img.src = "./assets/tablet/image-hero.jpg"
    } else {
        img.src = "./assets/mobile/"
    }
}