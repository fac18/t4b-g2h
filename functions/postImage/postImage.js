const Airtable = require("airtable");

exports.handler = (event, context, callback) => {
  const { API_URL, API_CLIENT_ID, API_KEY } = process.env;
  Airtable.configure({
    endpointUrl: API_URL,
    apiKey: API_KEY
  });
  const fullData = JSON.parse(event.body);

  const base = Airtable.base(API_CLIENT_ID);

  base("images").create([
    {
      fields: {
        museum_record_id: fullData.museumRecordId,
        url: fullData.url,
        name: fullData.name,
        caption: fullData.caption,
        description: fullData.description,
        colour: fullData.colour,
        copyright_status: fullData.copyrightStatus,
        copyright_holder: fullData.copyrightHolder,
        creator: fullData.creator,
        credit: fullData.credit,
        orientation: fullData.orientation,
        create_date: fullData.createDate,
        collection: fullData.collection,
        keywords: fullData.keywords,
        medium: fullData.medium,
        period: fullData.period,
        people: fullData.people
      }
    }
  ]);
};
