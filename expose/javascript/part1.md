values added:  20
final result:  20
values added:  20
The code returns an error because the variable `result` is being referenced, but since it was declared with the `let` keyword, it has block scope and its scope ended at the end of the if statement block.
The code returns an error because the variable `result` was delared with `const` so it can not be reassigned a value, which is what occurs on line 4 where a TypeError was thrown.
The code returns an error because of the same reason for question 5. The variable `result` was delared with `const` so it can not be reassigned a value, which is what occurs on line 4 where a TypeError was thrown.