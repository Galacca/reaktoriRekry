const data = require('../data/status.real');

/*
I preferred to have the data locally just in case something happens to the gist file.
Heroku is sometimes a bit sluggish too, so this should result in better performance
*/

const fetchPackagesAsRawText = async () => {
  try {
    const response = await fetch(data);
    const responseText = await response.text();
    return responseText;
  } catch (error) {
    throw new Error('Could not retrieve data from local.');
  }
};

export default fetchPackagesAsRawText;
