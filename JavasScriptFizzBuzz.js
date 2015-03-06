// FIZZ BUZZ TEST

/*

    Rules:  1.) The Console must print out 1 to 100
            2.) On numbers divisible by 3 the words "Fizz" must be printed next to the number
            3.) On numbers divisible by 5 the words "Buzz" must be printed next to the number
            4.) On number divisible by both 3 and 5 the words "Fizz Buzz" must be printed
                next to the number.

    This is a basic FizzBuzz example for JavaScript. It is quite common for interviewers to ask this question
    and have the interviewees write it on a piece of paper. It is also common for a lot of programmers to fail it.

 */

for(i = 1; i <= 100; i++){

    if(i % 3 === 0 && i % 5 === 0){
        console.log(i + " Fizz Buzz");
    } else if (i % 5 === 0) {
        console.log(i + " Buzz");
    } else if (i % 3 === 0) {
        console.log(i + " Fizz ");
    } else {
        console.log(i);
    }

}