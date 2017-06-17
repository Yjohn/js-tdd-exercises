function isVowel(letter) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i < vowels.length; i++) {
        if (vowels[i] === letter) {
            return true;
        }
    }
    return false;
}
function countVowelsInString(phrase){
    var count=0;
    for (var i=0;i<phrase.length;i++){
        if(isVowel(phrase[i])){
            count++;
        }
    }
    return count;
}

test('count the vowels in the string',function(){
    var school=('code your future');
    expect(countVowelsInString(school)).toBe(7);
})