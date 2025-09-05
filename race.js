async function getCard(id) {
  const res = await fetch('https://dummyjson.com/carts/' + id);
  return res.json();
}

async function race(promises) {

  return  new Promise((resolve, reject) => {
    promises.forEach(promise => {
      promise
        .then(result => resolve(result))
        .catch(e => {
          reject(new Error(e))
        })
    })
  })
}

async function test() {
  const result = await race([
    getCard(1),
    getCard(2),
    getCard(3)
  ]);
  console.log('Winner:', result);
}

test();

