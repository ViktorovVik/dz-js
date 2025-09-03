function getData(url, error) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${error} ${response.status}`)
      }
      return response.json()
    })
}

getData('https://pokeapi.co/api/v2/pokemon/ditto', 'No Pica-Pica:(')
  .then(({abilities}) => {
    const getAbility = abilities.map(pokemon => pokemon.ability);
    return getData(getAbility[0].url, 'There`s no power here');
  })
  .then(data => {
    const getEntries = data.effect_entries;

    const englishEntry = getEntries.find(entry => entry.language.name === 'en');
      if (englishEntry) {
        console.log('Описание:', englishEntry.effect);
      }
  })
.catch(error => {
  const errorEl = document.querySelector('body');
  const divEl = document.createElement('div');
  errorEl.appendChild(divEl);
  divEl.innerHTML = error.message;
})