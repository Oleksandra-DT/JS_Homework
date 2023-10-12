var age = Number (prompt("Вкажіть ваш вік"));
var count = age % 10
if (count === 1)
    console.log("Вам " + age + " рік")
else if (count === (2 || 3 || 4))
    console.log("Вам " + age + " роки")
else if(count === (5 || 6 || 7 || 8 || 9 || 0))
    console.log("Вам " + age + " років")
console.log(typeof age)
console.log(age > 0)