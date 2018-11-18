import { BASE_URL, POST, DELETE } from './constants';

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

export default class LinkApi {
  async getAll() {
    return await fetch(`${BASE_URL}/links-read-all`)
      .then(checkStatus)
      .then(parseJson)
      .then(returnData);
  }

  async add(link) {
    return await fetch(`${BASE_URL}/link-add`, {
      method: POST,
      body: JSON.stringify(link),
    })
      .then(checkStatus)
      .then(parseJson)
      .then(returnData);
  }

  async delete(link) {
    return await fetch(`${BASE_URL}/link-delete`, {
      method: DELETE,
      body: JSON.stringify(link),
    })
      .then(checkStatus)
      .then(parseJson)
      .then(returnData);
  }
}
