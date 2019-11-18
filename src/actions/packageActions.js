
import fetchPackagesAsRawText from '../services/packageService';

const initializePackages = () => async (dispatch) => {
  const packageAsRawText = await fetchPackagesAsRawText();
  dispatch({
    type: 'PARSE_RAW_TEXT',
    data: packageAsRawText,
  });
};

export default initializePackages;
