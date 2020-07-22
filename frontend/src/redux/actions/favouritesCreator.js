async function addToFavourites(serviceId, categ) {
  const response = await fetch('/api/favourites', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ serviceId, categ })
  })
  if (response.status === 200) {
    setFavourites(!favourites)
  } else {
    alert('Something is wrong!')
  }
}

export default addToFavourites;
