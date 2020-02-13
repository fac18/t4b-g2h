const Airtable = require("airtable");

exports.handler = (event, context, callback) => {
  const searchTerm = event.queryStringParameters.keywords;
  const { API_URL, API_TEST_CLIENT_ID, API_KEY } = process.env;

  Airtable.configure({
    endpointUrl: API_URL,
    apiKey: API_KEY
  });

  const base = Airtable.base(API_TEST_CLIENT_ID);
  const data = [];

  base("images")
    .select({
      // Selecting the first 3 records in Grid view:

      filterByFormula: `
        IF(
          (FIND('${searchTerm}',{keywords}))!=0,
          IF(
            (MID(
              {keywords},
              (FIND('${searchTerm}',{keywords}))-1,
              1)
              )=' ',
            TRUE(),
            FALSE()
            ),
          FALSE()
        )
      `,

      // filterByFormula: `
      //    AND(
      //      IF(
      //        (FIND('${searchTerm}',{keywords}))!=0,
      //        TRUE(),
      //        FALSE()
      //      ),
      //      IF(
      //        (MID(
      //          {keywords},
      //          (FIND('${searchTerm}',{keywords}))-1,
      //          1
      //        )=' '),
      //        TRUE(),
      //        FALSE()
      //      )
      //    )
      // `,

      //
      // filterByFormula: `AND(IF(FIND('${searchTerm}',{keywords})!=0,TRUE(),FALSE()),IF((MID({keywords},FIND('${searchTerm}',{keywords})-1,1)=OR(' ',',')),TRUE(),FALSE()))`,
      //
      //
      // filterByFormula: `
      //    AND(
      //      IF(
      //        FIND('${searchTerm}',{keywords})!=0,
      //        TRUE(),
      //        FALSE()
      //      ),
      //      IF(
      //        MID(
      //          {keywords},
      //          FIND(('${searchTerm}',{keywords})-1,1)=OR(' ',',')
      //        ),
      //        TRUE(),
      //        FALSE()
      //      )
      //    )
      // `,
      //
      //
      // `AND((FIND('${searchTerm}', {keywords})),(((FIND('${searchTerm}', {keywords}))-1)=OR(' ',',')))`,

      // filterByFormula: `FIND(' ${searchTerm}', {keywords})`,

      // filterByFormula: `FIND(' ${searchTerm}', {keywords})`,
      //
      // `
      // IF(
      //   AND(
      //     (FIND('${searchTerm}', {keywords})),
      //     ((FIND('${searchTerm}', {keywords}))-1)=OR(' ',',')
      //   ),
      //     IFTRUE,
      //     IFFALSE
      // )
      // `,
      maxRecords: 3,
      view: "Grid view"
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          console.log("Retrieved", record.get("image_id"));
          data.push(record);
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
        } else {
          const body = JSON.stringify({ records: data });
          const response = {
            statusCode: 200,
            body: body,
            headers: {
              "content-type": "application/json",
              "cache-control": "Cache-Control: max-age=60, public"
            }
          };
          callback(null, response);
        }
      }
    );
};

// Below is attempt at using async/await instead of callbacks, to be fixed

// // Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
// const Airtable = require("airtable");

// exports.handler = async (event, context) => {
//   try {
//     console.log("testing this thing");
//     const { API_URL, API_TEST_CLIENT_ID, API_KEY } = process.env;

//     Airtable.configure({
//       endpointUrl: API_URL,
//       apiKey: API_KEY
//     });

//     const base = Airtable.base(API_TEST_CLIENT_ID);

//     const response = base("images")
//       .select({
//         // Selecting the first 3 records in Grid view:
//         maxRecords: 3,
//         view: "Grid view"
//       })
//       .eachPage(
//         function page(records, fetchNextPage) {
//           // This function (`page`) will get called for each page of records.

//           records.forEach(function(record) {
//             console.log("Retrieved", record.get("image_id"));
//           });

//           // To fetch the next page of records, call `fetchNextPage`.
//           // If there are more records, `page` will get called again.
//           // If there are no more records, `done` will get called.
//           fetchNextPage();
//         },
//         function done(err) {
//           if (err) {
//             console.error(err);
//             return;
//           }
//         }
//       );

//     const data = await response;

//     let object = { statusCode: 200, body: data };

//     return console.log(object);
//   } catch (err) {
//     return { statusCode: 500, body: err.toString() };
//   }
// };
