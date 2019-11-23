/*
 A simple helper function that helps getting usable url's from depends fields
 that have a version number in them.
 And another one to add the pipes back since they had to be parsed.
*/

const stripVersionNumbers = (value) => {
  if (value.endsWith(')') || value.endsWith(') ')) {
    const splitForVersionNumbers = value.split(' (');
    return (splitForVersionNumbers[0]);
  }
  return (value);
};

const getPackageNames = (dependency) => {
  if (dependency.includes('|')) {
    return dependency.split(' | ').map((d) => ({ withVersion: d, withoutVersion: stripVersionNumbers(d) }));
  }
  return [{ withVersion: dependency, withoutVersion: stripVersionNumbers(dependency) }];
};

export const addPipes = (components) => {
  return components.reduce((accumulator, value, index) => {
    if (index < components.length - 1) {
      accumulator.push(value);
      accumulator.push(' | ');
      return accumulator;
    } else {
      accumulator.push(value);
      return accumulator;
    }
  }, []);
};

export default getPackageNames;
