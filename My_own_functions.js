
/*function myIsNan(a){
    if(a == Number){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

console.log(myIsNan('gg'))*/


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
    let percentage1;
    let percentage2;
    let counterEven = 0;
    let counterNotEven = 0;
    for (let i = 0; i < 10; i++) {
        //   console.log(Math.random());
        var result = (Math.floor(Math.random() * 1001));
        console.log(result);
        if (result % 2 === 0) {
            counterEven++
        }
        if (result % 2 !== 0) {
            counterNotEven++
        }
        console.log(counterEven, counterNotEven)
    }
    percentage1 = (counterEven * 100) / count;
    percentage2 = (counterNotEven * 100) / count;

    console.log('Всього було згенеровано ' + count + ' чисел. З них: ' + counterEven + ' парних і ' + counterNotEven + ' непарних чисел. Їх відсоткове співвідношення: ' + percentage1 + '/' + percentage2)
}

console.log(checkProbabilityTheory(10))*/


