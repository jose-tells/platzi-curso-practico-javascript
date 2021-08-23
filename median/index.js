const list = [
  400,
  100,
  10123,
  300,
  200,
  344,
];

const sortList = list.sort((a, b) => {
  return a - b
});

// These are the same because, the function converts the initial array to its sorted version
console.log(list);
console.log(sortList)


const halfList = Math.floor(sortList.length / 2);


function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let median

if (isEven(sortList.length)) {
  median = (sortList[halfList] + sortList[halfList - 1]) / 2
  console.log(`Is an even list and its median is ${median}`);
} else {
  median = sortList[halfList]
  console.log(`Is an odd list and its median is ${median}`)
}