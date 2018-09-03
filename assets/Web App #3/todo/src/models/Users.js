import api from './api';
import { DEFAULT_USER } from './consts';

export async function getUserData(userId = DEFAULT_USER) {
  const { data } = await api.get(`/users/${userId}`);

  return data;
}
