const packageReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PARSE_RAW_TEXT':
      // The parsing has to be done somewhere. A reducer seems like the most logical place.
      const packagesArray = action.data.split('\n\n');
      const packagesObject = {};

      packagesArray.forEach((packageString, index) => {
      // Seems like the easiest way to get the description is to parse it here.
        const start = packageString.indexOf('Description');
        const end = packageString.indexOf('Original-Maintainer');
        const desc = packageString.slice(start, end).replace('Description: ', '');

        // Split long single string of package info into strings with key and value.
        const keyValueArray = packageString.split('\n');
        const packageObject = {};

        keyValueArray.forEach((keyValue) => {
        // Split "key: value" string into array.
          const split = keyValue.split(': ');
          // 0 index has key, 1 index has value. Add each key:value into package object
          // Check if value line starts with whitespace, if it does it means its part
          // of description and is not needed. and should be casted aside
          if (split[0] && split[1] && split[1].charAt(0) !== ' ') {
            packageObject[split[0]] = split[1];
          }

          // Simple check if Package (name) has been set, then set Description from
          // the earlier parsing value. This removes issue where Description was set
          // for an undefined key
          if (packageObject.Package) {
            packageObject.Description = desc;
            packagesObject[packageObject.Package] = packageObject;
          }
        });
      });
      return (packagesObject);

    default:
      return state;
  }
};

export default packageReducer;
