// Some helper functions to help us format the deps to be usable as URL's
// First one strips version numbers, second one strips pipes

const stripVersionNumbers = (value) => {
  if (value.endsWith(')') || value.endsWith(') ')) {
    const splitForVersionNumbers = value.split(' (');
    return (splitForVersionNumbers[0]);
  }
  return (value);
};

const formatPackageNames = (dependency) => {
  if (dependency.includes('|')) {
    return stripVersionNumbers(dependency.replace('| ', ''));
  }
  return stripVersionNumbers(dependency);
};

export default formatPackageNames;
