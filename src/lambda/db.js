const mongoose = require('mongoose');
require('dotenv').config();

const { DB_PASSWORD } = process.env;
const uri = `mongodb://egodon:${DB_PASSWORD}@ds135592.mlab.com:35592/linklib`;

export const linksSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  submitter: {
    type: String,
    required: true,
  },
  submissionDate: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
});

const Link = (module.exports = mongoose.model('Link', linksSchema));

module.exports = {
  uri,
  Link,
};
