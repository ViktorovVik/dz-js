const Character = function(race, name, language) {
  this.race = race
  this.name = name
  this.language = language
}

Character.prototype.speak = function() {
  console.log(`${this.name} говорит на языке: ${this.language}`)
}

const Orc = function(race, name, language, weapon) {

  Character.call(this, race, name, language);

  this.weapon = weapon
}

Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;

Orc.prototype.hit = function() {
  console.log(`${this.name} наносит удар ${this.weapon}`);
}

const man = new Character('Человек', 'Анатолий', 'Общий');
man.speak()
console.log(man)

const orc1 = new Orc('Орк', 'Маргог-Гробанак', 'Орсимерский', 'Молот');
orc1.hit()
console.log(orc1)

const Elf = function(race, name, language, spells) {

  Character.call(this, race, name, language);

  this.spells = spells
}

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.spell = function() {
  console.log(`${this.name} применяет заклинание: Огненный шар!`);
}


Elf.prototype.castSpell = function() {
  const spells = ['Огненный шар', 'Молния', 'Исцеление', 'Ледяной шип'];
  const randomSpell = spells[Math.floor(Math.random() * spells.length)];
  console.log(`${this.name} создает новое заклинание: ${randomSpell}`);
  return randomSpell
}

const elf1 = new Elf('Эльф', 'Синраэль', 'Эльфиский');
elf1.spell()
elf1.castSpell()
console.log(elf1)