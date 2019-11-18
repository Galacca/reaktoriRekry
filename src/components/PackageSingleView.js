import React from 'react';

const PackageSingleView = (packageName) => {
  return (
    <div>
      {packageName.Package}
      {packageName.Status}
      {packageName.Priority}
      {packageName.Section}
      {packageName['Installed-Size']}
      {packageName.Maintainer}
      {packageName.Architecture}
      {packageName.Version}
      {packageName.Description}
      {packageName['Original-Maintainer']}
      {packageName.Homepage}
      {packageName.Depends}
      {packageName.Conffiles}
      {packageName['Multi-Arch']}
      {packageName.Source}
      {packageName.Essential}
    </div>
  );
};

export default PackageSingleView;
