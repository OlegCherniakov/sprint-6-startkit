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

const placesList = document.querySelector("div.root .places-list");



const form = document.forms.new;

//запускаем функцию
function popupIsOpened() {
  popup.classList.add("popup_is-opened"); //окрыть
}

function popupClose() {
  popup.classList.remove("popup_is-opened"); //закрыть
}

//вешаем наблюдателей

//5. Реализовать добавление карточек через форму.
// Создаёт элемент карточки возвращает его
function createCard(placeName, placeLink) {
  const placeCardContainer = document.createElement("div");
  const placeCardImageContainer = document.createElement("div");
  const placeCardDeleteIcon = document.createElement("button");
  const placeCardDescriptionContainer = document.createElement("div");
  const placeCardNameElement = document.createElement("h3");
  const placeCardLikeIcon = document.createElement("button");
  // назначаю классы
  placeCardContainer.classList.add("place-card");
  placeCardImageContainer.classList.add("place-card__image");
  placeCardDeleteIcon.classList.add("place-card__delete-icon");
  placeCardDescriptionContainer.classList.add("place-card__description");
  placeCardNameElement.classList.add("place-card__name");
  placeCardNameElement.textContent = placeName;
  placeCardImageContainer["style"]["background-image"] = `url(${placeLink})`;
  placeCardLikeIcon.classList.add("place-card__like-icon");
  //определяю дочерние элементы
  placeCardContainer.appendChild(placeCardImageContainer);
  placeCardContainer.appendChild(placeCardDescriptionContainer);
  placeCardImageContainer.appendChild(placeCardDeleteIcon);
  placeCardDescriptionContainer.appendChild(placeCardNameElement);
  placeCardDescriptionContainer.appendChild(placeCardLikeIcon);

  return placeCardContainer;
}

// Добавляет элемент карточки
function addCard(event) {
  event.preventDefault(); // отменяем действие события по умолчанию

  const name = form.elements.name;
  const link = form.elements.link;
  const placeCardContainer = createCard(name.value, link.value);

  placesList.appendChild(placeCardContainer); //куда добаляю карточку
  form.reset(); // очистка формы
}

// 4. Реализовать лайки.

function likeClickLiked(event) {
  if (event.target.classList.contains("place-card__like-icon")) {
    event.target.classList.toggle("place-card__like-icon_liked");
  }
}

// 6. Реализовать возможность удалять карточки.

//console.log(placeCardDeleteIcon);

function deleteClick(event) {
  if (event.target.classList.contains("place-card__delete-icon")) {
    placesList.removeChild(event.target.closest(".place-card"));
  }
}

//выводим все карточки на страничку

initialCards.map((card) => {
  const newcard = createCard(card.name, card.link);
  placesList.appendChild(newcard);
});

//слушатели
userInfoButton.addEventListener("click", popupIsOpened);
buttonClose.addEventListener("click", popupClose);
form.addEventListener("submit", addCard);
placesList.addEventListener("click", deleteClick);
placesList.addEventListener("click", likeClickLiked);

// 1. Написать код, добавляющий карточки при загрузке страницы
// 2. Реализовать открытие формы для добавления карточек
