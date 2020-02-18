const filterAll = (searchResults, collectionValue, artistValue) => {
  let filteredObj = {};
  let filterResult = byCollection(searchResults, collectionValue);
  filteredObj.records = filterResult;
  return filteredObj;
  // byArtist(searchResults, artistValue);
};

const byCollection = (searchResults, collectionValue) => {
  if (collectionValue) {
    return searchResults.records.filter(result => {
      return result.fields.collection === collectionValue;
    });
  }
  return;
};

// const byArtist = (searchResults, artistValue) => {
//   if (artistValue) {
//     return searchResults.records.filter(result => {
//       return result.fields.creator === artistValue;
//     });
//   }
//   return;
// };

export default filterAll;
