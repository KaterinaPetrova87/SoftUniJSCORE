let Person = require('./p02_InheritingToString');
function extendClass(classToExtend) {
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function(){
        return `I am a ${this.species}. ${this.toString()}`;
    }
}

extendClass(Person);
let p = new Person('Pesho', 'pesho@abv.bg');
console.log(p);
console.log(p.species);
console.log(p.toSpeciesString());
