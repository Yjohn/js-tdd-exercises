/**
 * This function is supposed to remove vowels from a phrase
 * Add tests to prove that it functions properly with these examples at least:
 *         removeVowels("goodbye")  // --> "gdby"
 *         removeVowels("nodegirls")  // --> "nd grls"
 *         removeVowels('how are you today?') // --> "hw r y tdy?"
 * Consider EDGE cases (how the function behaves if you pass undefined, or a number etc..)
 * Then add a test that contains CAPITAL vowel letters (hEllo for example)
 *      - It should expect the E to be removed
 *      - Run the tests and see you new test fail (RED)
 *      - Change the implementatino to remove the letter (capital and small letters)
 *       (maybe Google Case Insensitive Regular Expressions and read about regular expressions and see how you can use them)
 */

function removeVowels(phrase) {
    return phrase.replace(/[aeiouAEIOU]/g, '');
}

/*
This is a sample test - remove it and write AT LEAST 5 more tests to prove the function works as expected  
test('removeVowels should remove the Os', function(){
    var result = removeVowels('Tom');
    expect(result).toBe('Tm');
});
*/
test('removeVowels should remove the Os', function () {
    var result = removeVowels('Tom');
    expect(result).toBe('Tm');
});

test('removeVowels should remove the Oand e', function () {
    var result = removeVowels("goodbye");
    expect(result).toBe('gdby');
});

test('removeVowels should remove the O,i and e', function () {
    var result = removeVowels("nodegirls");
    expect(result).toBe('ndgrls');
});

test('removeVowels should remove the a, u, O and e', function () {
    var result = removeVowels('how are you today?');
    expect(result).toBe('hw r y tdy?');
});

test('removeVowels should remove the a, u, O and e in upper and lower case', function () {
    var result = removeVowels('hOw are yOu todAy?');
    expect(result).toBe('hw r y tdy?');
});