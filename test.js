var getWordCount = function(stringToTest) {
    const wordArray = stringToTest.split(' ');
    return wordArray.length;
};
var auCarre = function (nombreAElever){

    return parseInt(nombreAElever * nombreAElever);
}

var result = getWordCount('je suis bon en js');
alert(result);
var nb = auCarre(16)
alert(nb);