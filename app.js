const images = document.querySelectorAll('.image-container span');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = new Audio(); // Create a new Audio object

let currentImageIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    image.classList.toggle('show', i === index);
  });

  const audioElement = images[index].querySelector('audio');
  audio.src = audioElement.src;
  audio.load(); // Ensure the audio file is loaded
  audio.play().catch((error) => {
    console.error(`Failed to play audio: ${error}`);
  });
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

function showPrevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
}

prevBtn.addEventListener('click', () => {
  showPrevImage();
});

nextBtn.addEventListener('click', () => {
  showNextImage();
});

// Initial load
document.addEventListener('DOMContentLoaded', () => {
  showImage(currentImageIndex);
});
