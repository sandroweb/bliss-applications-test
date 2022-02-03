import axios from 'axios';

const API = process.env.REACT_APP_API;

type GetHealthStatusResponse = {
  status: 'OK' | string;
};

export const getHealthStatus = () => {
  return axios.get<GetHealthStatusResponse>(`${API}/health`);
};
