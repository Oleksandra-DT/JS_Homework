'number' + 3 + 3;
//В консолі буде виведено number33, оскільки ми виконуємо лівоасоціативну операцію, при додаванні string 'number' і числа 3 відбувається конкатинація і ми отримуємо 'number3',далі виконується друга операція 'number3' + 3, і знову конкатинація.

null + 3;
//В консолі буде виведено 3, бо null прирівнюється до false, а false=0, 0+3=3

5 && "qwerty"
//В консолі буде виведено qwerty, бо при виконання логічної операції "і" повертається останнє обчислене значення

+'40' + +'2' + "hillel";
//В консолі буде виведено 42hillel, бо оскільки ми виконуємо лівоасоціативну операцію, + перед string '40' перетворює 40 в тип даних number, аналогічно відбувається з +'2'.40+2=42. А число + рядок призводять до конкатинації.


'10' - 5 === 6;
//В консолі буде виведено false, бо в операції віднімання пріоритет вищий ніж в строгого порівняння, тому ми воконуємо спочатку віднімання. string '10' JS бачить як число 10. 10 - 5 = 5, а 5 !=== 6

true + false
//В консолі буде виведено 1, оскільки в програмування true=1, a false=0, 1+0=1

'4px' - 3
//В консолі буде виведено NaN, бо не можливо відняти число від рядка.

'4' - 3
//В консолі буде виведено 1, бо при виконанні операції з віднімання для JS число в рядку це число, 4-3=1


'6' + 3 ** 0;
//В консолі буде виведено 61, бо оскільки у зведення в ступінь вищий пріорітет, то спершу ми приводимо 3 в нульову ступінь і отримуємо 1, потім в результаті конкатинації отримуємо 61

12 / '6'
//В консолі буде виведено 2, бо при операції з ділення JS сприймає string 6 як число

'10' + (5 === 6);
//В консолі буде виведено 10false, тому що операція строгої рівності взята в дужки має вищий пріоритет і виконується першою. 5!===6 тому результатом цієї операції є false. А далі відбувається конкатинація.

null == ''
//В консолі буде виведено false, тому що в JS null дорівнює тільки null або undefined

3 ** (9 / 3);
//В консолі буде виведено 27, тому що операція ділення взята в дужки має вищий пріоритет і виконується першою.9:3=3, а 3 зведене в третю ступінь=27.

!!'false' == !!'true'
//В консолі буде виведено true. рядок 'false' дає нам true, перше логічне "ні" дає нам false, а друге "ні" повертає true. Аналогічно відбувається з рядком 'true', тобто !!'false' = true i !!'true' = true. true == true

0 || '0' && 1
//В консолі буде виведено 1, операція "і" має вищий пріоритет і тому виконується першою. '0'&& 1 дає нам 1(виводиться останнє обчислене значення). 0 || 1 дає нам 1(обчислення припиняється після першого true )

(+null == false) < 1;
//В консолі буде виведено false. Першою виконується операція в дужках. +null дає нам 0, а 0 це false. False == false, тому результатом операції в дужках є true. Потім виконуємо порівняння, де true стає 1, а 1 !<1


false && true || true
//В консолі буде виведено true. Логічна операція і має вищий пріоритет, тому виконується першою. false && true = false (обчислення припинилось на першому false). false || true = true(обчислення припиняється на першому true)

false && (false || true);
//В консолі буде виведено false. Бо в даному випадку пріоритет наданий логічній операції або, яка виконується першою. false || true = true(обчислення припиняється на першому true).false && true = false (обчислення припинилось на першому false).

(+null == false) < 1 ** 5;
//В консолі буде виведено false. Першою виконується операція в дужках і дає нам результат true. Потім зведення у ступінь: 1 ** 5 = 1. True = 1, a 1 !< 1