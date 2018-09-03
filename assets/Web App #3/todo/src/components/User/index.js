export default ({
  name, email, phone, address, city, country,
}) => `
  <li class="mdl-list__item demo-user-block__name mdl-color--primary">
    <span class="mdl-list__item-primary-content mdl-typography--headline mdl-color-text--white">${name}</span>
  </li>
  <li class="mdl-list__item">
    <span class="mdl-list__item-primary-content">${email}</span>
  </li>
  <li class="mdl-list__item">
    <span class="mdl-list__item-primary-content">${phone}</span>
  </li>
  <li class="mdl-list__item">
    <span class="mdl-list__item-primary-content">${[address, city, country].join(', ')}</span>
  </li>
`;
