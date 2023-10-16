//Трикутник

//варіант_1


/*function drawTriangle(rowsNumber, symbol) {
var limit = rowsNumber;
let count = 0;
while(count <= limit) {
    let result = '';
    for (let i = 0; i < count; i++) {
        result += symbol;
    }
    console.log(result)
    count++
}
}

console.log(drawTriangle(10, '@'))*/

//варіант_2

/*function drawTriangle2(a, b){
    for(var i=1; i <= a; i++){
        let finalString = ""
        for(var j=1; j<=i; j++){
            finalString += b;
        }
        console.log(finalString)
    }
}

console.log(drawTriangle2(5, '*'))*/

// Зведення у ступінь

/*let x;
let y;
function pow(x, y) {
  let result = x;
  for (let i = 1; i < y; i++) {
    result *= x;
  }
  return result;
}
console.log (pow(2, 3))*/

//Сума чисел від 1 до 100 не кратних 3

/*var sum = 0;
var initialNumber = 0;
var maxNumber = 0;
while (maxNumber < 100) {
        maxNumber++;
        initialNumber++;
        if (initialNumber % 3 == 0) {
            continue; }
        sum += initialNumber;
        }
        console.log(sum);*/




