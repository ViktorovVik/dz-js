class Character {
  constructor(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }

  speak() {
    console.log(`${this.name}: родной язык - ${this.language}.`);
  }
}

class Orc extends Character {
  constructor(race, name, language, weapon) {
    super(race, name, language);

    this.weapon = weapon;
  }

  hit() {
    console.log(`${this.race} наносит удар: оружие - ${this.weapon}`);
  }

  speak() {
    console.log(`${this.name}: родной язык - ${this.language}.`);
  }
}

class Elf extends Character {
  constructor(race, name, language, spell) {
    super(race, name, language);
    this.spell = spell;
  }

  castSpell() {
    const spells = ['Огненный шар', 'Молния', 'Исцеление', 'Ледяной шип'];
    const randomSpell = spells[Math.floor(Math.random() * spells.length)];
    console.log(`${this.name} создает новое заклинание: ${randomSpell}`);
  }

  speak() {
    console.log(`${this.name}: родной язык - ${this.language}.`);
  }
}

const man = new Character('Человек', 'Андрюша', 'Всеобщий');
man.speak();
console.log(man);

const orc = new Orc('Орк', 'Гролак-Гроболаг', 'Орсимерский', 'Большой топор');
orc.hit();
orc.speak();
console.log(orc);

const elf = new Elf('Эльф', 'Синраэль', 'Эльфийский');
elf.speak();
elf.castSpell();
console.log(elf);


