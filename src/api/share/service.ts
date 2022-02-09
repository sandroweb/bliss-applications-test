import axios from 'axios';

const API = process.env.REACT_APP_API;

export const sendUrlByEmail = async (
  destination_email: string,
  content_url: string
) => {
  return await axios.post(`${API}/share`, {
    body: { destination_email, content_url },
  });
};
