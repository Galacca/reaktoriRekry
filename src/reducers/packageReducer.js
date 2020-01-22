const packageReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PARSE_RAW_TEXT':
      // The parsing has to be done somewhere. A reducer seems like the most logical place.
      const packagesArray = action.data.split('\n\n');
      packagesArray.sort();
      const packagesObject = {};
      packagesArray.forEach((packageString, index) => {
      // Seems like the easiest way to get the description is to parse it here.
        const start = packageString.indexOf('Description:');
        // Let it run to the end and snatch everything even if it doesnt belong in the description
        const end = packageString.length;
        // In order to save anything following the : in Description:
        // we replace the Description: with a whitespace.
        const descFirstSlice = packageString.slice(start, end).replace('Description:', '');
        // regex: If it does not start with a whitespace (^S)
        // Keep going to the end of the line (.+)
        // For every line individually (m)
        // Dont stop at the first match (g)
        const regex = /^\S.+/mg;
        // Anything caught by this is not a part of the description. Remove it.
        const desc = descFirstSlice.replace(regex, '').trim();
        // Split long single string of package info into strings with key and value.
        const keyValueArray = packageString.split('\n');
        const packageObject = {};

        keyValueArray.forEach((keyValue) => {
        // Split "key: value" string into array.
          const split = keyValue.split(': ');
          /* 0 index has key, 1 index has value. Add each key:value into package object
           Check if value line starts with whitespace, if it does it means its part
           of description and is not needed. and should be casted aside. Also turn
           the Depends fields into a more manageable format since we have to work a lot
           on them.
          */

          if (split[0] && split[1] && split[1].charAt(0) !== ' ') {
            if (split[0] === 'Depends') {
              const splitDepends = split[1].split(', ');
              packageObject[split[0]] = splitDepends;
            } else {
              packageObject[split[0]] = split[1];
            }
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
      return packagesObject;

    default:
      return state;
  }
};

export default packageReducer;