import { getOrders } from '../models/Orders';
import { getUserData } from '../models/Users';
import OrderList from '../components/OrderList';
import User from '../components/User';

export async function updateOrderData(rootElement) {
  let orderData = { items: [] };
  try {
    orderData = await getOrders();
  } catch (e) {
    // do nothing, return default data
  }
  const html = OrderList(orderData);

  rootElement.innerHTML = html; // eslint-disable-line no-param-reassign
}

export async function updateUserData(rootElement) {
  let userData = {};
  try {
    userData = await getUserData();
  } catch (e) {
    // do nothing, return default data
  }
  const html = User(userData);

  rootElement.innerHTML = html; // eslint-disable-line no-param-reassign
}
