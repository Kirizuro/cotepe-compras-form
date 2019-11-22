import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export const getApi = async query => {
  try {
    const response = await api.get(`/${query}`);
    this.result = response.data.result.recordset;
  } catch (error) {
    return error;
  }
};

export default { api, getApi };
