const items = [];

const inputContainer = document.getElementById("inputContainer")

const userItems = document.getElementById("item");
const itemsLabel = document.getElementById("itemsLabel")
const newItemBtn = document.getElementById("newItemBtn");
const amountOfItems = document.getElementById("amount");
const itemsInput = document.getElementById("items");

const averageShow = document.getElementById("averageShow");
const averageAlert = document.getElementById("averageAlert");

let i = null;

newItemBtn.addEventListener("click", (e) => {
  let numberOfItems = Number(amountOfItems.value)
  if (itemsLabel.innerHTML === "Amount of items"  && numberOfItems !== 0) {
    console.log(numberOfItems);
    e.preventDefault();
    itemsLabel.innerText = "Items";
    amountOfItems.classList.add("transition")
    itemsInput.classList.add("transition")
    itemsInput.focus({preventScroll: true});
    averageAlert.innerHTML = null
  } else if (itemsLabel.innerHTML === "Items" && i < numberOfItems) {
    e.preventDefault();
    items.push(Number(itemsInput.value));
    console.log(items)
    itemsInput.value = null
    i++
  } else {
    e.preventDefault();
    averageAlert.innerHTML = "Set an amount of numbers!"
  };

  if( i === numberOfItems - 1){
    newItemBtn.innerHTML = "Calculate"
  }

  if(i === numberOfItems){
    e.preventDefault();
    myAverage(items);
    newItemBtn.classList.add("getRid")
    itemsLabel.classList.add("getRid")
    averageShow.classList.add("transition")
    amountOfItems.classList.add("getRid")
    itemsInput.classList.add("getRid");
  }
});



function myAverage(array) {
  const sum = items.reduce((accumulateValue = 0, newElement) => {
    return accumulateValue + newElement;
  })
  let average = sum / array.length;
  averageShow.innerHTML = `The average is: ${average.toFixed(1)}`
};