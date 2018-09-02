import api from './api';

const DEFAULT_USER = 1;

export async function getOrders(userId = DEFAULT_USER) {
  try {
    const { data } = await api.get(`/orders?id=${userId}`);

    return data;
  } catch (e) {
    throw e; // todo: handle error
  }
}
