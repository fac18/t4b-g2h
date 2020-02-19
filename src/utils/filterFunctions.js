// const filterAll = async (
//   searchResults,
//   collectionValue,
//   artistValue,
//   mediumValue
// ) => {
//   let finalResult = [];
//   await Promise.all([
//     byCollection(searchResults, collectionValue),
//     byArtist(searchResults, artistValue),
//     byMedium(searchResults, mediumValue)
//   ])
//     .then(wholeArr => removeEmptyArr(wholeArr))
//     .then(reducedArr => finalArray(reducedArr))
//     .then(finalArr => putArrInObj(finalArr))
//     // .then(result => console.log(result))
//     .then(res => {
//       finalResult = res;
//     })
//     // .then(res => {
//     //   return (finalResult = res);
//     // })
//     .catch(err => console.error(err));

//   return finalResult;
// };

const filterAll = (
  searchResults,
  collectionValue,
  artistValue,
  mediumValue
) => {
  // let finalResult = [];
  let arr = [
    byCollection(searchResults, collectionValue),
    byArtist(searchResults, artistValue),
    byMedium(searchResults, mediumValue)
  ];

  return putArrInObj(finalArray(removeEmptyArr(arr)));
};
// .then(result => console.log(result))
// (res => {
//   finalResult = res;
// })
// .then(res => {
//   return (finalResult = res);
// })
// .catch(err => console.error(err));

// return finalResult;

const removeEmptyArr = arr => {
  return arr.filter(array => {
    return array !== null;
  });
};

const finalArray = reducedArr => {
  if (reducedArr.length >= 1) {
    let countedArray = [];
    reducedArr[0].forEach(firstInnerElement => {
      let count = 0;
      reducedArr.forEach(outerElement => {
        outerElement.forEach(innerElement => {
          if (
            innerElement.fields.image_id === firstInnerElement.fields.image_id
          ) {
            count++;
          }
        });
      });
      if (count === reducedArr.length) {
        countedArray.push(firstInnerElement);
      }
    });
    return countedArray;
  }
};

const putArrInObj = finalArr => {
  let filteredObj = { records: finalArr };
  return filteredObj;
};

const byCollection = (searchResults, collectionValue) => {
  if (collectionValue) {
    return searchResults.records.filter(result => {
      return result.fields.collection
        .toLowerCase()
        .includes(collectionValue.toLowerCase());
    });
  }
  return null;
};

const byArtist = (searchResults, artistValue) => {
  if (artistValue) {
    return searchResults.records.filter(result => {
      return result.fields.creator
        .toLowerCase()
        .includes(artistValue.toLowerCase());
    });
  }
  return null;
};

const byMedium = (searchResults, mediumValue) => {
  if (mediumValue) {
    return searchResults.records.filter(result => {
      return result.fields.medium
        .toLowerCase()
        .includes(mediumValue.toLowerCase());
    });
  }
  return null;
};

export default filterAll;
