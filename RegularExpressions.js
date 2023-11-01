//Без А:
/*
/^[^aаAА]{6,}$/

*/

// Параноя
/*
var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];
var arr1 = [];
for (const arrKey in arr) {
    var user = arr[arrKey];
    var re = /^(([a-zA-Z0-9]+)|([a-zA-Z0-9]+\.[a-zA-Z0-9]+))@(gmail|yahoo)?\.com$/;
    if (re.test(user.email) === true){
        arr1.push(user.email)
    }
}
console.log(arr1)
*/
