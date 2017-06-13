/*********************
INSTRUCTIONS

This activity contains 4 coding challenges designed to give you practice authoring algorithms.
Take your time and read the instructions carefully. Fill in the functions or code the algorithms.
Some of the challenges have assertions and some do not.
Read the instructions to determine how to assess your code.

***********************/


/*** 1 ***/
( function(){
    /*******************
    INSTRUCTIONS:
    Create an algorithm that uses the letters in the `singles` array to populate the `combos` array
    with every possible combination of TWO letters. e.g. [ 'aa', 'ab', 'ac', 'ad', ... , 'ec', 'ed', 'ee' ]

    NOTE:
    - The `combos` array should have 25 items after populated by your algorithm
    - Do not change the `singles` array
    ***********************/

    const singles = [ "a", "b", "c", "d", "e" ];
    var combos  = [];

    // YOUR CODE HERE

    for(var i = 0; i < singles.length; i++){
      for(var j = 0; j < singles.length; j++){
        combos.push(singles[i] + singles[j]);
      }
    }
    console.assert( combos.length == 25, { "message" : "`combos.length` does not equal 25", "combos.length" : combos.length } );
    // console.assert( utility.areArraysEqual( combos, utility.combos ), { "message" : "`combos` does not contain all combinations of letters", "combos" : combos } );
} )();





/*** 2 ***/
( function(){
    /*******************
    INSTRUCTIONS:
    Read through the word problem and write an algorithm that satisfies the scenario.

    WORD PROBLEM:
    You are going on a road trip and you will pass through several large cities on the way
    to your final destination. You decide to write a little script to help you decide which route you will take
    to go through each city. The script should help you decide to do one of two things:

    1. go straight through the city during low traffic times or around the city during rush hour
    2. print out a message telling you which diretion to go

    You decide that morning rush hour is between 6am and 9am and that evening rush hour is between 4pm and 6pm.

    To simplify your cevaluations you use military time (its easier than trying to evaluate `5am` or `5:00`):
    6am = 600
    9am = 900
    4pm = 1600
    6pm = 1800

    You have one variable `timeOfDay` that holds the current time (in military time) which is 500 (5am).
    Once you have your algorithm working, change the `timeOfDay` to a few times to ( 800, 1200, 1700, and 2000 )
    test the algorithm and see if it works consistently.
    ***********************/

    var timeOfDay = 500;

    // YOUR CODE HERE

} )();




/*** 3 ***/
( function(){
    /*******************
    INSTRUCTIONS:
    Author a function that implements a factorial calculation.

    NOTES:
    Factorials are a mathematical representation of the product of a finite series of integers starting with 1.
    Factorials are written as `4!`, that is to say, a number and an exclamation point. The concept is pretty simple.
    A factorial of a number is the product of all the integers from 1 to that number.
    `4!` is the product of 1, 2, 3, and 4 (which equal 24)

    Here are some examples:

    2! = 1 * 2 = 2
    4! = 1 * 2 * 3 * 4 = 24
    6! = 1 * 2 * 3 * 4 * 5 * 6 = 720

    The factorial function should return the factorial value.
    e.g. factorial( 6 ) should return the number 720
    ***********************/

    var factorial = function( integer ){

        // YOUR CODE HERE
        var temp = 1;
        for(var i = integer; i > 0; i--){
          temp *= i;
          // console.log(i);
        }
        return temp;
    };

    console.assert( factorial( 4 ) == 24, { "message" : "factorial( 4 ) doesn't equal 4", "factorial( 4 )" : factorial( 4 ) } );
    console.assert( factorial( 6 ) == 720, { "message" : "factorial( 6 ) doesn't equal 6", "factorial( 6 )" : factorial( 6 ) } );
} )();





/*** 4 ***/
( function(){
    /*******************
    INSTRUCTIONS:
    Author a function that interpolates between two numbers.

    NOTES:
    Interpolation is a fancy word for subdividing the space between two numbers.
    For instance, say we have the numbers 1 and 2. We want to interpolate between those two numbers 4 times,
    which is to say that we want to divide the space between those numbers into 4 equal parts.

    Interpolating between 1 and 2 would give us:

    1, 1.25, 1.5, 1.75, and 2

    Notice that the interval between each number is equal. The interval between 1 and 1.25 is 0.25,
    the interval between 1.25 and 1.5 is 0.25, etc.

    The interpolate function takes 3 parameters:
    `start` is the smaller of the two numbers being interpolated (in the above example: 1).
    `end` is the larger of teh two numbers being interpolated (in the above example: 2).
    `count` is the number of interpolations (in the above example 4)

    The interpolate function should return an array containing the interpolated values.
    e.g. interpolate( 1, 2, 4 ) should return the array [ 1, 1.25, 1.5, 1.75, 2 ]
    ***********************/

    var interpolate = function( start, end, count ){

        // YOUR CODE HERE
        var jump = (end - start) / count;
        var array = [];
        array.push(start);
        for(var i  = 1; i < count; i++){
          array.push(start+=jump);
        }
        array.push(end);
        return array;
}

    console.assert( utility.areArraysEqual( interpolate( 1, 2, 4 ), utility.int1 ), { "message" : "interpolate( 1, 2, 4 ) doesn't contain all interpolated values", "interpolate( 1, 2, 4 )" : interpolate( 1, 2, 4 ) } );
    console.assert( utility.areArraysEqual( interpolate( 1, 2, 10 ), utility.int2 ), { "message" : "interpolate( 1, 2, 10 ) doesn't contain all interpolated values", "interpolate( 1, 2, 10 )" : interpolate( 1, 2, 10 ) } );
} )();
