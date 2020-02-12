// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const Airtable = require("airtable");

exports.handler = (event, context, callback) => {
  console.log("inside function getKeyword");
  console.log(event.queryStringParameters);
  const { API_URL, API_TEST_CLIENT_ID, API_KEY } = process.env;

  // const send = body => {
  //   callback(null, {
  //     statusCode: 200,
  //     body: JSON.stringify(body)
  //   });
  // };
  Airtable.configure({
    endpointUrl: API_URL,
    apiKey: API_KEY
  });
  console.log(Airtable.configure);

  const base = Airtable.base(API_TEST_CLIENT_ID);
  const data = [];

  base("images")
    .select({
      // Selecting the first 3 records in Grid view:
      // filterByFormula: `SEARCH("${myFilter}", Column) >= 0`

      filterByFormula: "SEARCH(' farm', {keywords})",
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
