const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
 const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(arrayMusicians, arrayInstruments) {
 var emptyArray = [];
 for (let i = 0; i < arrayMusicians.length; i++) {
     emptyArray.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`);
 }
 return emptyArray;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(fact){
  var lennonFacts = [];
  while (i < facts.length){
    lennonFacts.push('${fact[i]}' + '!!!')
  }
  return lennonFacts;
}