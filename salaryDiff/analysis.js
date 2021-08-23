// Helpers or Utils
// These are function that aren't part of the business logic, but we need them 'cause they will help us with the algorithm.
function isEven(number) {
  return (number % 2 === 0) 
};

// Mediana calculator

// General Median
const salaryPan = panama.map((person) => { 
  return person.salary;
});

const salarySort = salaryPan.sort((salaryA, salaryB) => { 
  return salaryA - salaryB;
});


function getMedian(listOfSalary) {
  const salaryHalfPosition = Math.floor(listOfSalary.length / 2);
  if(isEven(listOfSalary.length)){
    const personInHalf1 = listOfSalary[salaryHalfPosition - 1];
    const personInHalf2 = listOfSalary[salaryHalfPosition];
    const median = (personInHalf1 + personInHalf2) / 2;
    return median;
  } else {
    const median = listOfSalary[salaryHalfPosition];
    return median;
  };
};

const generalMedianPan = getMedian(salarySort);

// Top 10% median
const spliceStart = (salarySort.length * 90) / 100;
const spliceAmount = salarySort.length - spliceStart;

const salaryPanTop10 = salarySort.splice(spliceStart, spliceAmount);
const top10SalaryMedianPan = getMedian(salaryPanTop10);

console.log({
  generalMedianPan,
  top10SalaryMedianPan
});
