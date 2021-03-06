const mongoose = require('mongoose');
const { uri, linksSchema } = require('./db');

let connection = null;

export async function handler(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    const data = await run();
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({ data }),
    });
  } catch (error) {
    callback(error);
  }
}

async function run() {
  if (connection == null) {
    connection = await mongoose.createConnection(uri, {
      bufferCommands: false,
      bufferMaxEntries: 0,
      useNewUrlParser: true,
    });
    connection.model('Link', linksSchema);
  }

  const M = connection.model('Link');

  const links = await M.find({}).sort({ _id: -1 });

  return links;
}
