const baseAddress = 'https://swapi.dev/api/';

const findAll = async (resource) => {
  const url = baseAddress.concat(resource);
  const response = await fetch(url).then((response) => response.json().catch((ex) => ex));
  response.results.forEach(obj => obj.id = obj.url.replace(/[^0-9]/g, ''));
  return response
};

const findById = async (resource, id) => {
  const url = baseAddress.concat(resource);
  return await fetch(`${url}/${id}`).then((response) => response.json().catch((ex) => ex))
};

const fetchList = async (urls) => {
  const results = Promise.all(urls.map(url => fetch(url)
    .then(res => res.json()).catch((ex) => ex)));
  return results
};

const fetchPage = async (url) => {
  const response = await fetch(url).then((response) => response.json().catch((ex) => ex));
  response.results.forEach(obj => obj.id = obj.url.replace(/[^0-9]/g, ''));
  return response
};

export default { findAll, findById, fetchList, fetchPage };
