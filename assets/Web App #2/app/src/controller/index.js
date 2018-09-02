import { getOrders } from '../models/Orders';
import OrderList from '../components/OrderList';

export async function updateOrderData(rootElement) {
  const orders = await getOrders();
  const html = OrderList(orders);

  rootElement.innerHTML = html; // eslint-disable-line no-param-reassign
}
