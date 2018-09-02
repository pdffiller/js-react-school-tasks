// eslint-disable no-undef
import { updateOrderData } from './controller';
import '@babel/polyfill';

window.addEventListener('load', () => {
  const rootElement = document.getElementById('demo-order-list');

  updateOrderData(rootElement);

  window.updateOrderData = () => {
    rootElement.innerHTML = '';
    updateOrderData(rootElement);
  };
});
