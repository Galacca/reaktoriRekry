import { connect } from 'react-redux';

// eslint-disable-next-line max-len
// const findPackageByName = (name, props) => props.packages.find((packageList) => packageList.Package === (name));

const findPackageByName = (name, props) => {
  const weFound = props.packages.find(((packageList) => packageList.Package === (name)));
  console.log(`name${name}`);
  console.log(`props${props}`);
  console.log(`result${weFound}`);
};
const mapStateToProps = (state) => ({
  packages: Object.values(state.packages),
});

const connectedFindPackageByName = connect(mapStateToProps)(findPackageByName);

export default connectedFindPackageByName;
