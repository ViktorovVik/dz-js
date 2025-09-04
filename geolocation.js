navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log('Успех!', position);
  },
    (error) => {
      console.log('Ошибка!', error);
    }
);

function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(position => {
      resolve(position)
    },
      (error) => {
        reject(new Error(error.message));
      })

  })
}

getCurrentLocation()
  .then(data => {
    const lat = data.coords.latitude;
    const lon = data.coords.longitude;

    console.log(lat, lon)

    document.body.innerHTML += `Координаиты: ${lat}, ${lon}`
  })
  .catch(error => console.log(error))