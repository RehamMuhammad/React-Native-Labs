import {client} from './client';

export const getAllMovies = async query => {
  const params = {
    s: query,
  };
  try {
    const {data} = await client.get('/', {params});
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};