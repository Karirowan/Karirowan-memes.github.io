document.addEventListener("DOMContentLoaded", function () {
  // === 1. Перемешивание основной галереи ===
  const mainGallery = document.getElementById("image-gallery");
  if (mainGallery && mainGallery.children.length) {
    const images = Array.from(mainGallery.children);

    function shuffleArray(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    shuffleArray(images);

    mainGallery.innerHTML = ""; // очищаем контейнер
    images.forEach((img) => mainGallery.appendChild(img));
  }

  // === 2. Кнопка "Какой ты сегодня мем?" ===
  const moodImages = Array.from({ length: 99 }, (_, i) => `mood/mood${i + 1}.jpg`);
  const moodButton = document.getElementById("random-image-btn");
  const moodImage = document.getElementById("random-image");

  if (moodButton && moodImage) {
    moodButton.addEventListener("click", function () {
      const index = Math.floor(Math.random() * moodImages.length);
      moodImage.style.display = "block";
      moodImage.src = moodImages[index];
    });
  }

  // === 3. Кнопка "Сначала Стетхем, потом всё остальное" ===
const stathamBtn = document.getElementById("statham-btn");
  const stathamGallery = document.getElementById("statham-gallery");

  // Список картинок для кнопки 3
  const stathamImages = [
    'wall/wall1.jpg',
    'wall/wall2.jpg',
    'wall/wall3.jpg',
    'wall/wall4.jpg',
    'wall/wall5.jpg',
    'wall/wall125.jpg',
    'wall/wall126.jpg',
    'wall/wall127.jpg',
    'wall/wall128.jpg',
    'wall/wall129.jpg',
    'wall/wall130.jpg',
    // ... добавь сколько нужно
  ];

  stathamBtn.addEventListener("click", function () {
    if (stathamGallery.style.display === "none") {
      stathamGallery.style.display = "grid"; // показываем галерею
      stathamGallery.innerHTML = ""; // очищаем на всякий случай

      stathamImages.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        stathamGallery.appendChild(img);
      });
    } else {
      stathamGallery.style.display = "none"; // скрываем при повторном клике
    }
  });
});

