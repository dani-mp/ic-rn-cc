const processResponse = response => {
  if (!response.ok) {
    throw Error(response.status);
  }
  return response.json().then(json => json.data);
};

export const getPics = after => {
  const afterParam = after ? `&after=${after}` : '';
  return fetch(
    `https://api.reddit.com/r/pics/new.json?limit=30${afterParam}`
  ).then(processResponse);
};
