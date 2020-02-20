const Airtable = require("airtable");

exports.handler = (event, context, callback) => {
  console.log("we got here");
  const { API_URL, API_TEST_CLIENT_ID, API_KEY } = process.env;
  Airtable.configure({
    endpointUrl: API_URL,
    apiKey: API_KEY
  });
  const record = JSON.parse(event.body);

  console.log(record);
  const base = Airtable.base(API_TEST_CLIENT_ID);

  base("images").create([
    {
      fields: {
        museum_record_id: record
      }
    }
  ]);
};
