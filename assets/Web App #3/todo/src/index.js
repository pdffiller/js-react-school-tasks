/* eslint-disable no-undef */
import { updateOrderData, updateUserData } from './controller';
import '@babel/polyfill'; // eslint-disable-line import/no-extraneous-dependencies
import './styles.css';

window.addEventListener('load', () => {
  const rootElementOrders = document.getElementById('demo-order-list');
  const rootElementUser = document.getElementById('demo-user-data');

  updateOrderData(rootElementOrders);
  updateUserData(rootElementUser);

  window.updateCart = () => {
    rootElementOrders.innerHTML = '';
    rootElementUser.innerHTML = '';

    updateOrderData(rootElementOrders);
    updateUserData(rootElementUser);
  };
});
