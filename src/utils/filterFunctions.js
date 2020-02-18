const filterAll = (searchResults, collectionValue) => {
  // console.log(collectionValue);
  // console.log(searchResults.records);
  // console.log("fields = ", searchResults.records[0].fields.collection);
  console.log(byCollection(searchResults, collectionValue));
};

const byCollection = (searchResults, collectionValue) => {
  // if (collectionValue) {
  // const searchRecords = searchResults.records;
  return searchResults.records.filter(result => {
    console.log("collection = ", result.fields.collection);
    console.log("collectionvalue = ", collectionValue);
    // console.log(typeof result.fields.collection);
    // console.log(typeof collectionValue);
    return result.fields.collection === collectionValue;
    // return result.fields.collection;
  });
  // }
};

export default filterAll;
