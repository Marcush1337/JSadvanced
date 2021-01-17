// 1. 
// Написать функцию которая вернет сумму переданных фактических аргументов
// function func(a,b) {
// 	return a+b;
// }
// console.log(func(4,5));
// 2. 
// Создать функцию calculate(operand1, operand2, sign), где operand1 и operand2 — два числа, 
//sign — знак арифметической операции. 
// Функция должна расчитывать результат операции, исходя из переданного ей знака.
// Функция должна проверять корректность введенных чисел и знака операции.
// Все аргументы для функции принять от пользователя.
let a = +prompt("Введите первое слагаемое");
let b = +prompt("Введите второе слагаемое");
let sign = prompt("Введите знак операции");
function calculate(operand1,operand2,sign) 
{
	if (!parseInt(operand1&&operand2)) alert("Вы ввели не число");
	switch (sign) 
	{
	case "+":
		return operand1+operand2;
	case "-":
		return operand1-operand2;
	case "*":
		return operand1*operand2;
	case "/":
		return operand1/operand2;
	case "%":
		return operand1%operand2;
	default: 
		alert("Вы ошиблись знаком");
	}
}
console.log(calculate(a,b,sign));
// 3. 
// Напишите функцию, которая возвращает n-е число Фибоначчи. Для решения используйте цикл.
// function fib (n) {
//   let a = 0, b = 1;
//   for(let i = 0; i < n; i++){
//     b = a + b;
//     a = b - a;
//   }
//   return a;
// }
// console.log(fib(6));