> What is the difference between forEach, map, filter and reduce ?

1. forEach => The forEach() method calls a function once for each element in an array, in order.

2. map => Array.map() method creates a new array from the results of calling a function for every element

3. filter => The filter() method will create an array filled with all array elements that pass a test (given by function).

4. reduce => The reduce() method executes a reducer function for each value of an array.

---

> Explain these using your own words Explain the difference between function declaration and arrow function ?

1. function declaration => it will tell compiler about the function name, its return type, and parameters
   its a (function statement) which has parameters.
   its defined using function keyword.
   they will execute when they are called.
   syntax => function functionName(parameters) {
   // code to be executed
   }

2. Arrow functions were introduced in ES6. Arrow functions allow us to write shorter function syntax.

syntax =>

    hello = () => { return "Hello World!"; }

It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets
and the return keyword:

     hello = () => "Hello World!";

---

> Explain the difference between find and findIndex ?

1. find() => will return a value of array element that passes a test function
   if function returns true value , than find() will return value of that element.
   otherwise it returns undefined

2. findIndex => will return index of first array element that passes a test function.
   otherwise it returns -1

---

> If you like to filter out one object element in an array which method do you like to use: filter or find ?

filter() => as it creates an array filled with all array elements.
also its supported by browsers.

---

> Explain Explain the difference of var, let and const when we declare a variable ?

1. var

-   var is global scope & function scope
-   its global when its declared outside a function .. which means its available in use to the whole window.
-   its function when its declared inside a function (within).. which mean it can b access only inside function

2.  let & const are block scope

a. let

-   if variable is declared with let . We can used only inside that block.
-   it can't be re-declared but can be updated
-   if its not initialized will get reference error

b. const

-   it can only be accessed when they are declared in a block.
-   it cant be updated or re-declared.
-   its imp to initialized when its declared.
