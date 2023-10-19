
function myIsNan(a){
    if(a == Number || a * 1 == Number) {
        return false
    }
    else{
       return true ;
    }
}

console.log(myIsNan('3'))


/*function myPad(inputString,symbolToAdd,symbolLenght,whereToAdd) {
    let stringLenght = inputString.length;
    let symbolCount = symbolLenght - stringLenght;
    let symbolRepeat = symbolToAdd.repeat(symbolCount)
    if(whereToAdd = true){
        return(symbolRepeat + inputString )
    }
    else{
        return (inputString + symbolRepeat)
    }
}
console.log(myPad('Add something','@',20,false))*/



/*function checkProbabilityTheory(count) {
    let percentageOfEven;
    let percentageOfNotEven;
    let counterEven = 0;
    let counterNotEven = 0;
    for (let i = 0; i < count; i++) {
        //   console.log(Math.random());
        var result = Math.floor(Math.random() * (1000 - 100) + 100);
        console.log(result);
        if (result % 2 === 0) {
            counterEven++
        }
        if (result % 2 !== 0) {
            counterNotEven++
        }
        console.log(counterEven, counterNotEven)
    }
    percentageOfEven = (counterEven * 100) / count;
    percentageOfNotEven = (counterNotEven * 100) / count;

    console.log('Всього було згенеровано ' + count + ' чисел. З них: ' + counterEven + ' парних і ' + counterNotEven + ' непарних чисел. Їх відсоткове співвідношення: ' + percentageOfEven + '/' + percentageOfNotEven)
}

console.log(checkProbabilityTheory(10))*/


