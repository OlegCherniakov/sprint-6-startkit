// 2. Реализовать открытие формы для добавления карточек
// 3. Реализовать закрытие формы.
//находим нужные классы
const popup = document.querySelector("div.root .popup");
const popupButton = document.querySelector("div.root .popup .popup__button");
const popupInputTypeName = document.querySelector(
  "div.root .popup__input_type_name"
);
const popupInputTypeLinkUrl = document.querySelector(
  "div.root .popup__input_type_link-url"
);
const userInfoButton = document.querySelector(
  "div.root .profile .user-info .user-info__button"
);
const buttonClose = document.querySelector(
  "div.root .popup .popup__content .popup__close"
);
const placesList = document.querySelector("div.root .places-list");
const form = document.forms.new;

/**
 *  Можно лучше: Чаще всего функции характеризуют какое либо действие и начинаются с глагола. Например,
 *  если мы назовём функцию closePopup, то при взгляде на название функции сразу будет
 *  понятно, чем она занимается. Вот здесь можно почитать об этом подробнее https://learn.javascript.ru/function-basics#function-naming
 *
 *  Можно лучше: Можно объединить эти две функции (popupIsOpened и popupClose) в одну и использовать знакомый нам
 *  метод .toggle, вместо .add и .remove
 *
 * */
// 7 - спринт_______________________________________________________________________
const editPopup = document.querySelector("div.root .edit-popup");
const userInfoButtonEdit = document.querySelector("div.root .user-info__button_edit");
const editPopupClose = document.querySelector("div.root .edit-popup__close")
//console.log(userInfoButtonEdit);


function actionEditPopup() {
  editPopup.classList.add("popup_is-opened");
}

function cardClosingEditPopup () {
  editPopup.classList.remove("popup_is-opened");
}

userInfoButtonEdit.addEventListener("click", actionEditPopup);
editPopupClose.addEventListener("click", cardClosingEditPopup);

// конец 7 спринта_______________________________________________________________________

//запускаем функцию
function popupIsOpened() {
  popup.classList.add("popup_is-opened"); //окрыть
}

function popupClose() {
  popup.classList.remove("popup_is-opened"); //закрыть
}
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

//функция нажатия Enter
function eventEnter(event) {
  if (event.key === "Enter") {
    addCard(event);
    popupClose();
  }
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

/**
 * Можно лучше: Обычно map используется для изменения массива. Если у вас нет цели модифицировать исходный массив,
 * то лучше использовать что нибудь другое, например forEach.
 */
initialCards.map((card) => {
  const newcard = createCard(card.name, card.link);
  placesList.appendChild(newcard);
});

//слушатели
userInfoButton.addEventListener("click", popupIsOpened);
buttonClose.addEventListener("click", popupClose); //слушатель закрытия формы
/**
 * Можно лучше: Закрывать попап нужно после добавления карточки
 */
popupButton.addEventListener("click", popupClose); //слушатель закрытия формы после ввода полей
form.addEventListener("submit", addCard);
/**
 * Отлично, используется делегирование событий, слушатель определен на контейнере, а не вешается на каждую карточку.
 * И да, можно объединить функции deleteClick и likeClickLiked.
 */
placesList.addEventListener("click", deleteClick);
placesList.addEventListener("click", likeClickLiked);
/**
 * Можно лучше: Нет необходимости обрабатывать событие keydown на Enter, так как у нас выше уже объявлен обработчик
 * для события submit.
 */
popupInputTypeName.addEventListener("keydown", eventEnter); //слушатель кнопки Enter
popupInputTypeLinkUrl.addEventListener("keydown", eventEnter); //слушатель кнопки Enter

/**
 * В целом, работа выполнена хорошо, виден порядок в коде, используется делегирование событий для обработки нажатия
 * на иконку 'лайк' и 'удалить', массив initialCards вынесен в отдельный файл.
 *
 * Что можно сделать лучше:
 *  Нам достаточно обрабатывать событие submit для формы, нет необходимости обрабатывать отдельно нажатие на popupButton
 *  и нажатие на клавишу Enter. Подробнее здесь: https://learn.javascript.ru/forms-submit
 */