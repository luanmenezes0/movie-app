const baseUrl = 'https://api.themoviedb.org/3/';
const API_KEY = '09cb613a21480e11c07496d803efc1c7';

export const client = async endpoint => {
  const res = await fetch(`${baseUrl}${endpoint}?api_key=${API_KEY}`);
  return res.json();
};
