const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();

request.addEventListener('load', function() {
  const { abilities } = JSON.parse(this.responseText);
  const getAbility = abilities.map(pokemon => pokemon.ability);

  const request = new XMLHttpRequest();
  request.open('GET', getAbility[0].url);
  request.send();

  request.addEventListener('load', function() {
    const data = JSON.parse(this.responseText);
    const getEntries = data.effect_entries;

    const englishEntry = getEntries.find(entry => entry.language.name === 'en');
      if (englishEntry) {
        console.log(englishEntry.effect);
      }
  })
})