import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const { DB_PASSWORD } = process.env;
export const uri = `mongodb://egodon:${DB_PASSWORD}@ds135592.mlab.com:35592/linklib`;

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
