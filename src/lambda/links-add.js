const mongoose = require('mongoose');
const chalk = require('chalk');
const { uri, linksSchema, Link } = require('./db');

let connection = null;

export async function handler(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;

  console.log('event', event.body);

  const body = JSON.parse(event.body);

  try {
    const data = await run(body);
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ data }),
    });
  } catch (error) {
    callback(error);
  }
}

async function run(body) {
  if (connection == null) {
    connection = await mongoose.createConnection(uri, {
      bufferCommands: false,
      bufferMaxEntries: 0,
      useNewUrlParser: true,
    });
    connection.model('Link', linksSchema);
  }
  
  const Link = connection.model('Link', linksSchema);

  const link = new Link({
    title: body.title,
    url: body.url,
    category: body.category,
    submissionDate: new Date(),
    submitter: body.username,
  });

  link.save((err) => {
    if (err) {
      return console.error(err);
    }
    console.log(chalk.green(`Link ${link} successfully added.`));
  });

  return link;
}
