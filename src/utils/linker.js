import formatPackageNames from './helpers';

const isLinkable = (dependancy, packages) => {
  const formattedDeps = formatPackageNames(dependancy);
  const packageArray = Object.keys(packages);
  if (packageArray.includes(formattedDeps)) return formattedDeps;
  return false;
};

export default isLinkable;
