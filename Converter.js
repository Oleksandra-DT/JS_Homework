var unitType;
var number;
switch (unitType) {
    case 'км':
        console.log(number +' км це '+(number*1000)+' м');
        break;
    case 'кг':
        console.log(number +' кг це '+(number*1000)+' грм')
        break;
    case 'год':
        console.log(number +' год це '+(number*60)+' хв')
        break;
    default:
        console.log('Неправильна одиниця вимірювання!')
}