const BASE_URL = '/.netlify/functions/';

const checkStatus = (res) => {
  if (res.status >= 200 && res.status < 300) {
    return res;
  } else {
    const error = new Error(`HTTP Error ${res.statusText}`);
    error.status = res.statusText;
    error.response = res;
    console.error('Error communicating with server:');
    console.error(error);
    throw error;
  }
};

const parseJson = (res) => res.json();

const returnData = (res) => res.data;

export default {
  async getLinks() {
    return await fetch(`${BASE_URL}/links-read-all`)
      .then(checkStatus)
      .then(parseJson)
      .then(returnData);
  },
};
