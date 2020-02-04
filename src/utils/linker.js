const isLinkable = (dependancy, packages) => {
  const packageArray = Object.keys(packages);
  if (packageArray.includes(dependancy)) return dependancy;
  return false;
};

export default isLinkable;
