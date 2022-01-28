//Samarbeid med Anna Marita Meum Sandaker (discord: Anna Meum)

// Oppgave 1
const textToRemove = document.getElementById("remove");
const remove_btn = document.getElementById("remove-btn");

const removeText = () => {
  textToRemove.innerHTML = null;
};
remove_btn.addEventListener("click", removeText);

// Oppgave 2
const changeText = document.getElementById("change");
const change_btn = document.getElementById("change-btn");

const textToChange = () => {
  changeText.innerHTML = "Troll er store eventyrskapninger.";
};
change_btn.addEventListener("click", textToChange);

// Oppgave 3
const removeInputText = document.getElementById("input-text");
const input = document.getElementById("input");

const inputTextRemove = () => {
  removeInputText.innerHTML = null;
};
inputTextRemove();

const updateInput = (event) => {
  let letter = event.key;
  removeInputText.innerHTML += letter;
};
input.addEventListener("keyup", updateInput);
// Oppgave 4
const myList = ["item one", "item two", "item three"];
const ul = document.getElementById("ul");
const list_btn = document.getElementById("write-list");

const btndown = () => {
  const li = myList.map((listElement) => `<li>${listElement}</li>`);
  ul.innerHTML = li.join("");
};
list_btn.addEventListener("click", btndown);

// Oppgave 5
const text = document.getElementById("text");
const create_btn = document.getElementById("create");
const select = document.getElementById("select");
const placeHolder = document.getElementById("placeholder");

const createElement = () => {
  const htmlEl = select.value;
  const message = text.value;
  placeHolder.innerHTML += `<${htmlEl}>${message}</${htmlEl}>`;
};

create_btn.addEventListener("click", createElement);

// Oppgave 6
const list = document.getElementById("list");
const remove_li = document.getElementById("remove-li");

const removeList = () => {
  list.innerHTML = null;
};
remove_li.addEventListener("click", removeList);

// Oppgave 7
const nameInput = document.getElementById("name");
const order_btn = document.getElementById("order");

const keyUp = () => {
  const name = nameInput.value;
  if (name && name.length >= 4) {
    order_btn.disabled = true;
    order_btn.style = "border: 1px solid red";
  } else {
    order_btn.disabled = false;
    order_btn.style = "border: 1px solid black";
  }
};
nameInput.addEventListener("keyup", keyUp);

// Oppgave 8
const parent = document.querySelector(".children");
const parentChildren = parent.querySelectorAll("li");
const color_btn = document.getElementById("color");

const addBorder = () => {
  Array.from(parentChildren).forEach((li, index) => {
    if ((index + 1) % 2 === 0) {
      li.style = "border: 1px solid blue; margin-bottom: 10px; padding: 5px;";
    } else {
      li.style = "border: 1px solid purple; margin-bottom: 10px; padding: 5px;";
    }
  });
};

color_btn.addEventListener("click", addBorder);
