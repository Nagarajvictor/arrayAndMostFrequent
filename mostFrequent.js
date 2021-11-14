const mostFrequent=(arr)=> {
  arr.sort();
  if (arr.length == 0) 
    return -1;
  if (arr.length == 1) 
    return arr[0];
  let flag = 1,
    mostFrequent,
    max = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      flag = 1;
    } else {
      flag++;
    }
    if (flag > max) {
      max = flag;
      mostFrequent = arr[i];
    }
  }
  return mostFrequent;
}

let arr = [2, 1, 3, 4, 7, 9, 6, 5, 0 ,0 ,0];
console.log(mostFrequent(arr));
