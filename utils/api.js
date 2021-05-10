export async function getItems(keywords) {
  const promise = fetch(
    `https://images-api.nasa.gov/search?keywords=${keywords}`
  );
  const response = await promise;
  if (response === 404) {
    return [];
  }
  const data = await response.json();
  return data.collection.items;
}

export function removeChildren(event) {
  event.innerHTML = "";
}

export async function getItem(nasa_id) {
  const promise = fetch(
    `https://images-api.nasa.gov/search?nasa_id=${nasa_id}`
  );
  const response = await promise;
  if (response === 404) {
    return {};
  }
  const data = await response.json();
  return data.collection.items;
}
