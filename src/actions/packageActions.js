
import fetchPackageAsRawText from '../services/packageService';

const initializePackages = () => async (dispatch) => {
  const packageAsRawText = await fetchPackageAsRawText();
  dispatch({
    type: 'PARSE_RAW_TEXT',
    data: packageAsRawText,
  });
};

export default initializePackages;
