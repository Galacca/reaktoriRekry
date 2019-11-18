const data = require('../data/status.real');

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
