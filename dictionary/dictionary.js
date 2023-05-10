"use strict";

function compare_lit( a, b ) {
  return a.literal.localeCompare(b.literal);
}
function compare_lan( a, b ) {
  if ( a.language < b.language ){
    return -1;
  }
  if ( a.language > b.language ){
    return 1;
  }
  return 0;
}

function compare_len( a, b ) {
  if ( a.length < b.length ){
    return 1;
  }
  if ( a.length > b.length ){
    return -1;
  }
  return a.word.localeCompare(b.word);
}


const { Word } = require("./word");

function getAllWordsFromLanguage(words, language){
    var dico = words.filter(word => word.language === language);
    return dico;
}

function getConjunctions(words, count){
    var dico = words.filter(word => word.partOfSpeech == "conjunction");
    if (dico.length <= count){
        return dico;
    }
    return dico.slice(0, count);
}
function theSum(sumObj,val){
    sumObj.sum = sumObj.sum + val;
}

function averageLength(words){
    let length = words.length;
    if (length == 0){
        return null;
    }
    let sumObj = {
        sum:0
    };
    const map1 = words.map(word => theSum(sumObj,word.literal.length));
    var the_sum = sumObj.sum;
    return Math.round(the_sum / length);
}

function getWordsSorted(words){
    return words.sort(compare_lit);
}


let transObj = {
    language: "test",
    translation: "test"
};

function to_transObj(Word){
    var a_transObj = Object.create(transObj);
    a_transObj.language = Word.language;
    a_transObj.translation = Word.literal;
    return a_transObj;
}

function the_truth_trans(Word){
    if (Word.englishTranslation == null){
        return false;
    }
    return true;
}


function getTranslations(words, word){
    var the_word = words.find(Word => Word.literal == word);
    if (the_word === undefined){
        return null;
    }
    if (the_word.language == "English"){
        let trans_words = words.filter(Word => the_truth_trans(Word) && Word.englishTranslation == word);
        let arr_1 = trans_words.map(Word => to_transObj(Word));
        var a_transObj_1 = Object.create(transObj);
        a_transObj_1.language = "English";
        a_transObj_1.translation = word;
        arr_1.push(a_transObj_1);
        return arr_1.sort(compare_lan);
    }
    let trans_words_2 = words.filter(Word => the_truth_trans(Word) && the_truth_trans(the_word) && Word.englishTranslation == the_word.englishTranslation);
    let arr = trans_words_2.map(Word => to_transObj(Word));
    if (!the_truth_trans(the_word)){
        var a_transObj = Object.create(transObj);
        a_transObj.language = the_word.language;
        a_transObj.translation = the_word.literal;
        arr.push(a_transObj);
        return arr.sort(compare_lan);
    }
    var a_transObj = Object.create(transObj);
    a_transObj.language = "English";
    a_transObj.translation = the_word.englishTranslation;
    arr.push(a_transObj);
    return arr.sort(compare_lan);
}

let longObj = {
    length: 0,
    word: "test",
    language: "test",
    definition: "test"
};

function to_longObj(Word){
    var a_longObj = Object.create(longObj);
    a_longObj.length = Word.literal.length;
    a_longObj.word = Word.literal;
    a_longObj.language = Word.language;
    a_longObj.definition = Word.definition;
    return a_longObj;
}

function getLongWordDefinitions(words, threshold){
    let words_long = words.filter(word => word.literal.length >= threshold);
    let arr = words_long.map(word => to_longObj(word));
    return arr.sort(compare_len);
}

module.exports = {
    getAllWordsFromLanguage,
    getConjunctions,
    averageLength,
    getWordsSorted,
    getTranslations,
    getLongWordDefinitions,
}



