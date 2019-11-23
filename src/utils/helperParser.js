/*
 A simple helper function that helps parse url's from depends fields
 that have a version number in them.
*/

const parseUrlsFromDepends = (dependsValue) => {
  const dependsArray = Object.values(dependsValue);
  dependsArray.map((d) => {
    console.log(d);
    if (d.endsWith(')')) {
      const split = d.split(' (');
      console.log('Parsed something. Returning: ' +split[0])
      return split[0];
    }
    console.log('Nothing to parse returning: ' + d)
    return d;
  });
};

export default parseUrlsFromDepends;
