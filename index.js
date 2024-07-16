function createandinitialise (){
  let arr = [];
  let size = Number(prompt());
  for(let i = 0; i < size; i += 1){
    arr.push(Number(prompt()));
  }
  console.log(arr);
}

function manipulation() {
  let arr = [1, 2, 3, 4, 5];
  console.log(arr);
  arr.pop();
  console.log(arr);
}

function searching() {
  const arr = [1, 2, 3, 4, 5];
  console.log(arr);
  console.log("Enter element to be found");
  const val = Number(prompt());
  if (arr.indexOf(val) == -1) {
    console.log("element not found");
  }
  else {
    console.log("element is at " + arr.indexOf(val));
  }
}

function checkEven(i) {
  if (i % 2 == 0) {
    return i;
  }
}

function filtering() {
  let arr = [1, 2, 3, 4, 5];
  console.log(arr);
  const arrfilter = arr.filter(checkEven);
  console.log(arrfilter);
}

function merging() {
  const arr1 = [1, 2, 3, 4, 5];
  console.log(arr1);
  const arr2 = [6, 7, 8, 9, 10];
  console.log(arr2)
  const arr3 = arr1.concat(arr2);
  console.log(arr3);
}
createandinitialise()
searching();
manipulation();
merging();
filtering();