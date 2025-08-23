function throwDice(dice) {
   let getNum = dice.match(/\d+/);
   let result = parseInt(getNum);

  if (!getNum) {
    return null;
  }

    return (Math.floor(Math.random() * result) + 1);
}

console.log(throwDice('D8'));