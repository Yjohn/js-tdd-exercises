/*
    Similar to the add-numbers function, 
    write a function that multiplies any
    number of arguments passed to it.
    some expectations:
        multiply(4, 2)  // --> 8
        multiply(2, 2, 3)  // --> 18
    Write your implementation in TDD
        1. Add a Test (see it failing - RED)
        2. Write Code (to make it pass - GREEN)
        3. Refactor if needed
        4. REPEAT
 */
function multiply() {
    // this line converts whatever is passed to the function into an array
    // read more here - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
    var args = Array.prototype.slice.call(arguments);
    var result = 1;
    for(var i = 0; i< args.length; i++){
        result =result * parseInt(args[i]);
    }
    return result;
}

test('multiply numbers', function(){
    // var result = add(2, 1, 3);
    // expect(result).toEqual(6);
    expect(multiply(4,2)).toEqual(8);
});


test('multiply numbers', function(){
    expect(multiply(12,12)).toEqual(144);
});

test('multiply numbers', function(){
    expect(multiply(2,2,10)).toEqual(40);
});