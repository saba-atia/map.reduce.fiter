function cleanNames(names){
    return names.map(name=>name.trim());
}

const namesWithSpaces=[" injustice", " SuperMan", "Batman ", " flash "];
const cleanedNames=cleanNames(namesWithSpaces);

console.log(cleanedNames);