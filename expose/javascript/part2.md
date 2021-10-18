It will print `3` because `i` was declared with `var` so its scope will remain for the rest of the function after the for loop block ends.
It will print `150` because `discountedPrice` was declared with `var` so its scope will remain for the rest of the function after the for loop block ends.
It will print `150` because `finalPrice` was declared with `var` inside the function, so its scope will remain for the rest of the function.
This function will return `[ 50, 100, 150 ]` because `discounted` was declared at the beginning of the function with `var`, so its value was allowed to be modified with the addition of the three discounted prices
At line 12 a ReferenceError will occur because `i` will not be defined after the for loop ends, since it was declared inside it with `let`
At line 13 a ReferenceError will occur because `discountPrices` will not be defined after the for loop ends, since it was declared inside it with `let`
At line 14, it will print `150` because `finalPrice` was declared with `let` at the top of the function, so its scope will be present for the entire function
This function will return `[ 50, 100, 150 ]` because discounted was declared in the beginning of the function with `let` so its scope will remain present for the entire function and can be returned
A ReferenceError will occur because the scope of `i` will not persist after the for loop is over
At line 12, it will print `3` because `length` was defined with const at the beginning and was not changed in the function
This function will return `[ 50, 100, 150 ]` because a list that was declared with `const` can still have elements added to it
A. student.name B. student['Grad Year'] C. student.greeting() D. student['Favorite Teacher].name E. student.courseLoad[0]
A. `'32'` B. 1 C. 3 D. `3null` E. 4 F. 0 G. `'3undefined'` H. `Nan`
A. `true` B. `false` C. `true` D. `false` E. `false` F. `true`
The abstract equality operator `==` performs type conversion between the values and the strict equality operator `===` compares without type conversion. Any comparison between different types is `false` under `===`

The result will be that the function is called and returns `[ 2, 4, 6 ]`. Walking through the function, an array with no elements is made. A for loop begins that will iterate 3 times, one for each element in the list `[1,2,3]`. In each iteration of the loop, `doSomething` is called with the current value of `i` as an argument and it returns `i * 2`, and adds that value to the array `newArr`. This repeats for all values of the array `[1,2,3]`.

The output is 4 numbers 1 4 3 2 (in that order) each on their own line