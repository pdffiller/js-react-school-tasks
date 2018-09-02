export default ({
  name, params, quantity, price,
}) => `<tr>
<td class="mdl-data-table__cell--non-numeric">${name}</td>
<td class="mdl-data-table__cell--non-numeric">${params}</td>
<td>${quantity}</td>
<td>${price}</td>
<td>${quantity * price}</td>
</tr>`;
