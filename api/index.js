const processResponse = response => {
  if (!response.ok) {
    throw Error(response.status);
  }
  return response.json().then(json => json.data);
};

export const getPics = (after = '') =>
  fetch(`https://api.reddit.com/r/pics/new.json?limit=2&after=${after}`).then(
    processResponse
  );
