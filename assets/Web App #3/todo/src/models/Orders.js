import api from './api';
import { DEFAULT_USER } from './consts';

export async function getOrders(userId = DEFAULT_USER) {
  const { data } = await api.get(`/orders?id=${userId}`);

  return data;
}
