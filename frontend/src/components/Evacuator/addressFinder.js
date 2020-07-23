function geoFindMe() {
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const start = async () => {
      const res = await fetch(
        encodeURI(
          `https://geocode-maps.yandex.ru/1.x/?apikey=87dca1dc-f4e2-43ad-a883-c6353913a1f8&format=json&geocode=${longitude},${latitude}`,
        ),
      )
        .then((res) => res.json())
        .then((json) => json);
      const { response } = res;
      const result = response.GeoObjectCollection.featureMember.map(
        (adress) => adress.GeoObject.name,
      );
      // В результате лежат все данные, необходимые для инпута
      return result[0];
    };
    start();
  }
  function error() {
    console.log('error');
  }
  if (!navigator.geolocation) {
    console.log('Geolocation is not supported by your browser');
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

export default geoFindMe;
