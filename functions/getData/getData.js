// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const Airtable = require("airtable");

exports.handler = async (event, context) => {
  try {
    const { API_URL, API_TEST_CLIENT_ID, API_KEY } = process.env;

    Airtable.configure({
      endpointUrl: API_URL,
      apiKey: API_KEY
    });

    const base = Airtable.base(API_TEST_CLIENT_ID);

    const response = base("images");

    const data = await response.json();

    let object = { statusCode: 200, body: data.value };

    return console.log(object);
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
