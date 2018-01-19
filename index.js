const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
 const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(arrayMusicians, arrayInstruments) {
 var whoPlaysWhat = [];
 for (let i = 0; i < arrayMusicians.length; i++) {
     whoPlaysWhat.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`);
 }
 return whoPlaysWhat;
}

function johnLennonFacts(facts){
  var results = [];
  var count = 0;
  while (count < facts.length){
    results.push(facts[count] + '!!!');
    count++
  }
  return results;
}




 +function iLoveTheBeatles(num) {
 +  var array = [];
 +  do {
 +    array.push("I love the Beatles!")
 +    num++;
 +  } while (num < 15);
 +  return array;