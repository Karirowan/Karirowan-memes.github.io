// Перемешивание изображений в мозаике
document.addEventListener("DOMContentLoaded", function () {
  // Получаем все изображения в контейнере (используем класс)
  const container = document.querySelector('.image-mosaic');
  if (!container || !container.children.length) {
    console.error('Контейнер не найден или пустой!');
    return;
  }

  // Преобразуем NodeList в массив
  const images = Array.from(container.children);

  // Алгоритм Фишера-Йейтса для перемешивания массива
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Перемешиваем массив изображений
  shuffleArray(images);

  // Очищаем исходный контейнер
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // Возвращаем изображения обратно в контейнер в новом порядке
  images.forEach((image) => container.appendChild(image));
});

// Выбор случайного изображения при нажатии на кнопку
document.addEventListener("DOMContentLoaded", function () {
  // Список изображений
  
 const images = Array.from({ length: 91 }, (_, index) => `mood/mood${index + 1}.jpg`);
console.log(images);


  // Найдем элементы на странице
  const button = document.querySelector("#random-image-btn");
  const randomImg = document.querySelector("#random-image");

  // Функция для отображения случайного изображения
  function showRandomImage() {
    // Случайный индекс изображения
    const index = Math.floor(Math.random() * images.length);

    // Показываем выбранное изображение
    randomImg.style.display = "block";
    randomImg.src = images[index];
  }

  // Назначаем слушатель события на кнопку
  button.addEventListener("click", showRandomImage);
});