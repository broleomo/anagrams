// eventually will change this to an input value for a search of a word e.target.value
// p1. & p.3
function searchWord(){
let givenWord = document.getElementById('entry').value;
let matches = words.filter(function(word){
  return alphabetize(word) == alphabetize(givenWord);
});
console.log(matches);
}
function alphabetize(word){
  return word.split('').sort().join('');
}

// p2.
// create a loop using the length of the entire words list and give each word a value of [the variations of anagrams]
function makeDictionary() {
  let dictionary = {}
  for (var i = 0; i < words.length; i++) {
    let givenWord = words[i]
    let alphabetizedWord = alphabetize(givenWord);
    if (alphabetizedWord in dictionary){
        dictionary[alphabetizedWord].push(givenWord)
      } else {
        dictionary[alphabetizedWord] = [givenWord];
        }
    }
    return dictionary;
}

function makeFiveDictionary(){
  let dictionary = makeDictionary();
  let fiveDictionary = {};
  for (alphabetizedWord in dictionary) {
    let matches = dictionary[alphabetizedWord];
    if(matches.length >= 5){
      fiveDictionary[alphabetizedWord] = matches;
    }
  }
  return fiveDictionary;
}
console.log(makeFiveDictionary());

// p.4
