// Функция должна вернуть массив из центральных элементов переданных массивов.
// Центральный элемент, это один центральный, если массив по длине непарный [1, 2, 3, 4, 5] -> 3
// Центральный элемент, это пара центральных, если массив по длине парный: [1, 2, 3, 4, 5, 6] -> 3, 4 
function arrayFoo() 
{
  let resulting_array = [];
  for (var i=0; i<arguments.length; i++)
  {
  currentArray = arguments[i];
  if(currentArray.length%2==0)
  {
     resulting_array.push(currentArray[currentArray.length/2-1], currentArray[currentArray.length/2]);
  }
  else
  {
       resulting_array.push(currentArray[(currentArray.length-1)/2]);    
  }
}
return resulting_array;
}

let mass1 = [1,2,3,4,5,6,7];
let mass2 = [5,6,7,8,9,11,13,4];
let mass3 = [5,6,7,11,12,8,10];

console.log(arrayFoo(mass1,mass2,mass3));