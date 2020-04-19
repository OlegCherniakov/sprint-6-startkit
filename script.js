


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
const buttonClose = document.querySelector('div.root .popup .popup__content .popup__close');
//запускаем функцию
function popupIsOpened() {
  popup.classList.add("popup_is-opened"); //окрыть
}

function popupClose() {
  popup.classList.remove("popup_is-opened"); //закрыть
}

//вешаем наблюдателей
userInfoButton.addEventListener('click', popupIsOpened);
buttonClose.addEventListener('click', popupClose);

// 4. Реализовать лайки.






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


// 5. Реализовать добавление карточек через форму.
//https://photos.app.goo.gl/5QFm8TEpgF6D4yPU8
// 6. Реализовать возможность удалять карточки.
