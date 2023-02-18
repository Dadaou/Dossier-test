const getWordCount = (stringToTest) => {
    const wordArray = stringToTest.split(' ');
    return wordArray.length;
}
let result = getWordCount('je suis bon en js');
alert(result);