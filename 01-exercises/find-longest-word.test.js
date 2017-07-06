function findLongestWord(words) {
    var lgth = 0;
    var longest;

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > lgth) {
            var lgth = words[i].length;
            longest = words[i];
        }
    }

    return longest;
}
function findLongestStringWord(words) {
    var str = words.split(' ');
    var longest = findLongestWord(str);
    return longest;
}

test('find the longest word from the array ', function () {
    var words = ['Code', 'Your', 'Future'];
    var longest = findLongestWord(words);
    expect(longest).toBe('Future')
})

test('find the longest word from the string', function () {
    var school = 'Code Your Future';
    var longest = findLongestStringWord(school);
    expect(longest).toBe('Future')
})