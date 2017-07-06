function convertToNewRoman(number) {
    // ToDo: do the proper implementation using TDD
    var arabicNumbers = [1, 5, 10, 50, 100, 500, 100];
    var oldRomanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    for (i = 0; i < arabicNumbers.length; i++) {
        if (arabicNumbers[i] === number) {
            return oldRomanNumerals[i];
        }

    }
}
/* write the tests */
test('convertToNewRoman should return I for 1', function () {
    var result = convertToNewRoman(1);
    expect(result).toBe('I');
});

test('convertToNewRoman should return V for 5', function () {
    var result = convertToNewRoman(5);
    expect(result).toBe('V');
});

test('convertToNewRoman should return X for 10', function () {
    var result = convertToNewRoman(10);
    expect(result).toBe('X');
});

test('convertToNewRoman should return L for 50', function () {
    var result = convertToNewRoman(50);
    expect(result).toBe('L');
});