function Cat(name, owner){
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cute_statement = function () {
  return this.owner + " loves " + this.name
};

var cat1 = new Cat("Sennacy", "Jonathan");
var cat2 = new Cat("Breakfast", "Ke");

console.log(cat1.cute_statement());
console.log(cat2.cute_statement());

Cat.prototype.cute_statement = function(){
  return "everyone loves " + this.name + "!"
};

console.log(cat1.cute_statement());
console.log(cat2.cute_statement());

Cat.prototype.meow = function(){
  return "meow"
};

console.log(cat1.meow());
console.log(cat2.meow());

cat1.meow = function(){
  return "meow for cat1"
};

console.log(cat1.meow());
console.log(cat2.meow());