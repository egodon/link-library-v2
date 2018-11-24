import mongoose from 'mongoose';
import chalk from 'chalk';
import { uri, linksSchema } from './db';

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

  const query = { _id: body._id };

  Link.deleteOne(query, (err) => {
    if (err) {
      console.log(chalk.red('Error while deleting link', body.url));
      return;
    }
    console.log(chalk.green('Successfully deleted link', body.url));
  });
}
