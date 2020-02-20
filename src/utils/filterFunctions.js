const filterAll = (
  searchResults,
  collectionValue,
  artistValue,
  periodValue,
  mediumValue,
  orientationValue,
  peopleValue,
  colourValue
) => {
  let arr = [
    byCollection(searchResults, collectionValue),
    byArtist(searchResults, artistValue),
    byPeriod(searchResults, periodValue),
    byMedium(searchResults, mediumValue),
    byOrientation(searchResults, orientationValue),
    byPeople(searchResults, peopleValue),
    byColour(searchResults, colourValue)
  ];
  return putArrInObj(finalArray(removeEmptyArr(arr)));
};

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

const byPeriod = (searchResults, periodValue) => {
  if (periodValue) {
    return searchResults.records.filter(result => {
      return result.fields.period
        .toLowerCase()
        .includes(periodValue.toLowerCase());
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

const byOrientation = (searchResults, orientationValue) => {
  if (orientationValue) {
    return searchResults.records.filter(result => {
      return result.fields.orientation
        .toLowerCase()
        .includes(orientationValue.toLowerCase());
    });
  }
  return null;
};

const byPeople = (searchResults, peopleValue) => {
  if (peopleValue) {
    return searchResults.records.filter(result => {
      return result.fields.people
        .toLowerCase()
        .includes(peopleValue.toLowerCase());
    });
  }
  return null;
};

const byColour = (searchResults, colourValue) => {
  if (colourValue) {
    return searchResults.records.filter(result => {
      return result.fields.colour
        .toLowerCase()
        .includes(colourValue.toLowerCase());
    });
  }
  return null;
};

// export default byCollection;
export { byCollection, filterAll };
