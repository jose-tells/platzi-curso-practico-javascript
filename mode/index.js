const list = [
  4,
  1,
  4,
  3,
  2,
  3,
  4,
  6,
  5,
  7,
  6,
  8,
  2,
];

const listCount = {};

list.map((element) => {
  if(listCount[element]) {
    listCount[element] += 1;
  }else {
    listCount[element] = 1
  }
})

console.log(listCount);

const listArray = Object.entries(listCount).sort((a, b) => {
  return a[1] - b[1];
});

console.log(listArray);

const moda = listArray[listArray.length - 1]

console.log(moda)