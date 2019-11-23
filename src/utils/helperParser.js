/*
 A simple helper function that helps parse url's from depends fields
 that have a version number in them.
*/

const stripVersionNumbers = (value) => {
  if (value.endsWith(')') || value.endsWith(') ')) {
    const splitForVersionNumbers = value.split(' (');
    return (splitForVersionNumbers[0]);
  }
  return (value);
};

const matchDependsToPackages = (value, packageNames) => {
  console.log("value " +value)
  const match = packageNames.find((e) => e === value);
  console.log("match " +match);
  return match;
};

const getPackageName = (value, packageNames) => {
  if (value.includes('|')) {
    const pipesToSplit = value.split(' | ').map((d) => stripVersionNumbers(d));
    console.log("mapped pipestosplit " + pipesToSplit.map(p => p))
    return matchDependsToPackages(pipesToSplit.map(p => p), packageNames);
  }
  return matchDependsToPackages(stripVersionNumbers(value), packageNames);
};

export default getPackageName;
