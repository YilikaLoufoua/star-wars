const baseAddress = 'https://swapi.dev/api/';

const findAll = async (resource) => {
  const url = baseAddress.concat(resource);
  let response = await fetch(url).then((response) => response.json());
  const results = response.results.map((obj) => (obj));
  results.forEach(obj => obj.id = results.indexOf(obj) + 1);
  return results;
};

const findById = async (resource, id) => {
  const url = baseAddress.concat(resource);
  return await fetch(`${url}/${id}`).then((response) => response.json());
};

export default { findAll, findById };
