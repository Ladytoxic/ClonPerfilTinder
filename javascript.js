const images = [
    "./assets/img/braky_y_limoncito.jpg",
    "./assets/img/braky.jpg",
    "./assets/img/braky2.jpg"
];

let currentImageIndex = 0;

const profileImage = document.querySelector("#profile-image");
profileImage.src = images[currentImageIndex];

const backButton = document.querySelector("#back-button");
backButton.addEventListener("click", () => {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    profileImage.src = images[currentImageIndex];
});

const nextButton = document.querySelector("#next-button");
nextButton.addEventListener("click", () => {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    profileImage.src = images[currentImageIndex];
});

// funcionalidad a el botón No me gusta

const nopButton = document.querySelector(".nomegusta");
nopButton.addEventListener("click", () => {
    nopElement.style.display = "block";
    setTimeout(() => {
        nopElement.style.display = "none";
    }, 1000);
});

// funcionalidad a el botón me gusta

const likeButton = document.querySelector(".megusta");
likeButton.addEventListener("click", () => {
    likeElement.style.display = "block";
    setTimeout(() => {
        likeElement.style.display = "none";
    }, 1000);
});


// funcialidad para delizar a la izquierda o a la derecha
const likeElement = document.querySelector(".like");
const nopElement = document.querySelector(".nop");

let startX, endX;

profileImage.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

profileImage.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;

    if (startX > endX) {
        nopElement.style.display = "block";
        likeElement.style.display = "none";
    } else if (startX < endX) {
        likeElement.style.display = "block";
        nopElement.style.display = "none";
    }

    setTimeout(() => {
        nopElement.style.display = "none";
        likeElement.style.display = "none";
    }, 1000);
});

