async function getCard(id) {
  const res = await fetch('https://dummyjson.com/carts/' + id);
  return res.json();
}

async function race() {
  const racePromises = await Promise.race([
    getCard(1),
    getCard(2),
    getCard(3)
  ])

  console.log(racePromises);
}

race()