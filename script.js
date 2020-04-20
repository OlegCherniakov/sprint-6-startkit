/*
const placesList = document.querySelector('.places-list');
const placeCard = rootSection.querySelector('.place-card');

const placeCardImage = placesList.querySelector('.place-card__image');
const placeCardDeleteIcon = placeCardImage.querySelector('.place-card__delete-icon');

const placeCardDescription = placeCard.querySelector('.place-card__description');
const placeCardName = placeCardDescription.querySelector('.place-card__name');
const placeCardLikeIcon = placeCardDescription.querySelector('.place-card__like-icon');
*/

// 2. Реализовать открытие формы для добавления карточек
// 3. Реализовать закрытие формы.
//находим нужные классы
const popup = document.querySelector("div.root .popup");
const userInfoButton = document.querySelector(
  "div.root .profile .user-info .user-info__button"
);
const buttonClose = document.querySelector(
  "div.root .popup .popup__content .popup__close"
);
//запускаем функцию
function popupIsOpened() {
  popup.classList.add("popup_is-opened"); //окрыть
}

function popupClose() {
  popup.classList.remove("popup_is-opened"); //закрыть
}

//вешаем наблюдателей
userInfoButton.addEventListener("click", popupIsOpened);
buttonClose.addEventListener("click", popupClose);

// 4. Реализовать лайки.
/*Сердечко — это элемент с классом "place-card__like-icon". 
При лайке нужно давать ему дополнительный класс "place-card__like-icon_liked". 
При снятии лайка этот класс у элемента нужно убирать.*/


const placeCardLikeIcon = document.querySelector('div.root .places-list .place-card .place-card__description .place-card__like-icon');

function likeClickLiked(event) {
  if (event.target.classList.contains('place-card__like-icon')) {
      event.target.classList.toggle('place-card__like-icon_liked');
  }
}



placeCardLikeIcon.addEventListener('click', likeClickLiked);



// 6. Реализовать возможность удалять карточки.
const placeCardDeleteIcon = document.querySelector('div.root .place-card__delete-icon');
const placesList = document.querySelector('div.root .places-list')
//console.log(placeCardDeleteIcon);

function deleteClick(event) {
  if (event.target.classList.contains('place-card__delete-icon')) {
    placesList.removeChild(event.target.closest('.place-card'));
        }
}



placeCardDeleteIcon.addEventListener('click', deleteClick);


// 5. Реализовать добавление карточек через форму.


/*
// Создаёт элемент песни и возвращает его
function createSong(artistValue, songValue) {
    const trackContainer = document.createElement('div');
    const artistElement = document.createElement('h4');
    const titleElement = document.createElement('p');
    const songButtonElement = document.createElement('button');

    trackContainer.classList.add('song');
    artistElement.classList.add('song__artist');
    artistElement.textContent = artistValue;
    titleElement.classList.add('song__title');
    titleElement.textContent = songValue;
    songButtonElement.classList.add('song__like');

    trackContainer.appendChild(artistElement);
    trackContainer.appendChild(titleElement);
    trackContainer.appendChild(songButtonElement);

    return trackContainer;
}

// Добавляет элемент песни
function addSong(event) {
    event.preventDefault();

    const artist = form.elements.artist;
    const song = form.elements.song;
    const trackContainer = createSong(artist.value, song.value);

    songsContainer.appendChild(trackContainer);
    form.reset();
    renderAdded();
    addButton.setAttribute('disabled', true);
    addButton.classList.add('input__btn_disabled');
}

*/


/*
<div class="popup">
      <div class="popup__content">
        <img src="./images/close.svg" alt="" class="popup__close">
        <h3 class="popup__title">Новое место</h3>
        <form class="popup__form" name="new">
            <input type="text" name="name" class="popup__input popup__input_type_name" placeholder="Название">
            <input type="text" name="link" class="popup__input popup__input_type_link-url" placeholder="Ссылка на картинку">
            <button type class="button popup__button">+</button>
        </form>
      </div>
    </div>

*/

/*
<div class="place-card">
        <div class="place-card__image" style="background-image: url(https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg)">
          <button class="place-card__delete-icon"></button>
        </div>
        <div class="place-card__description">
          <h3 class="place-card__name">Камчатка</h3>
          <button class="place-card__like-icon"></button>
        </div>
      </div>

*/

const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
  {
    name: "Нургуш",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg",
  },
  {
    name: "Тулиновка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg",
  },
  {
    name: "Остров Желтухина",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg",
  },
  {
    name: "Владивосток",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg",
  },
];

/*
const listItem = document.createElement('div');
const list = document.querySelector('#items');
const listItem = document.createElement('li');

list.appendChild(listItem); // В список задач будет добавлен пустой пункт li, который мы создали методом createElement.
*/
// 1. Написать код, добавляющий карточки при загрузке страницы
// 2. Реализовать открытие формы для добавления карточек




