// Function to show description on hover
function showDescription(box) {
    box.querySelector('.food-description').style.opacity = '1';
}

// Function to hide description when mouse leaves
function hideDescription(box) {
    box.querySelector('.food-description').style.opacity = '0';
}
// Function to show description on hover for favorite games
function showDescription(box) {
    box.querySelector('.game-description').style.opacity = '1';
}

// Function to hide description when mouse leaves for favorite games
function hideDescription(box) {
    box.querySelector('.game-description').style.opacity = '0';
}

// Function to show description on hover for favorite movies
function showDescription(box) {
    box.querySelector('.movie-description').style.opacity = '1';
}

// Function to hide description when mouse leaves for favorite movies
function hideDescription(box) {
    box.querySelector('.movie-description').style.opacity = '0';
}

// Array of school images
const images = [
    "labney.jpg",
    "divinegrace.jpg",
    "amazingfaith.jpeg",
    "montesor.jpg",
    "maligaya.jpg",
    "access.jpg",
    "uc.jpeg"
];

let currentIndex = 0;

// Function to display the current image
function displayImage() {
    const imgElement = document.getElementById("educationImage");
    imgElement.src = images[currentIndex];
}

// Function to display the previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    displayImage();
}

// Function to display the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    displayImage();
}

// Initial display of the first image
displayImage();
