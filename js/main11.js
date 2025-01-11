let countries = ['India', 'United States', 'Russia', 'Japan', 'China'];

let countriesWords=countries.filter(country=>!(country.startsWith('U')||country.startsWith('R')));

let capitalWordsCountry=countriesWords.map(country=>country.toUpperCase());

let totalCountry=capitalWordsCountry.reduce((acc,curr)=>acc+curr.length,0);

console.log(countriesWords);
console.log(capitalWordsCountry);


console.log(`Total number of characters: ${totalCountry}`);