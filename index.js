// Add your functions here
function map(sourceArray, funk) {
  let array = [];
  sourceArray.forEach(element => {
      array.push(funk(element))
  });
  return array
}

function reduce(sourceArray, funk, startingValue) {
    let total;
    if (startingValue) {
        total = startingValue;
        for (let i = 0; i < sourceArray.length; i++) {
            total = funk(sourceArray[i], total);
        }
        return total;
    } else {
        total = sourceArray[0];
        for (let i = 1; i < sourceArray.length; i++) {
            total = funk(sourceArray[i], total);
        }
        return total;
    }
}