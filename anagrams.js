// eventually will change this to an input value for a search of a word e.target.value
// p1. & p.3
function searchWord(){
let givenWord = document.getElementById('entry');
let input2 = alphabetize(givenWord.value);
console.log(input2);
let matches = words.filter(function(word){
  return alphabetize(word) == alphabetize(givenWord);
});
console.log(matches);
}

function alphabetize(str){
  return str.toLowerCase().split('').sort().join('').trim();
}

// p2.
// create a loop using the length of the entire words list and give each word a value of [the variations of anagrams]
  let dictionary = {}
function makeDictionary() {
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
// doesInclude  - use dictionary to search that the letters are included
// write helper function to subtract letters from input string
// first, create helper function for subtractLetters()
// then create a loop for all the words in the dictionary

let array = Object.keys(dictionary)

function handleWord(){
let results = [];
let givenWord = alphabetize(document.getElementById('entry').value);
for(let i=0; i<array.length -1 ; i++){
  for(let j=i+1; j<array.length; j++){
    if(givenWord.length ===((array[i]+ array[j]).length)){
      if (alphabetize(array[i] + array[j]) === givenWord) {
          console.log(dictionary[array[i]] , dictionary[array[j]]);
      }
    }
  }
}
}
// p.5
function handleThreeWords(){
  let givenWord = alphabetize(document.getElementById('entry3').value);
  for(let i=0; i<array.length -1 ; i++){
    for(let j=i+1; j<array.length; j++){
      for (let k = j+ 1; k < array.length; k++) {
      if(givenWord.length ===((array[i]+ array[j] + array[k]).length)){
        if (alphabetize(array[i] + array[j] + array[k]) === givenWord) {
            console.log(dictionary[array[i]] , dictionary[array[j]], dictionary[array[k]]);
        }
      }
      }
    }
  }
}
