const priceOfProduct = parseFloat(prompt("Введіть ціну одиниці товару"))
const quantityOfProduct = parseFloat(prompt("Введіть кількість товару"))

const totalPrice = priceOfProduct * quantityOfProduct

const vatPercentage = 5
const vatValue = totalPrice * vatPercentage / 100


document.write(`
	<table border="2px">
	<tr>
		<th>Загальна вартість товару</th>
		<td>${priceOfProduct} * ${quantityOfProduct}</td>
		<td>${totalPrice}грн</td>
	</tr>

	<tr>
		<th>ПДВ товару</th>
		<td>${totalPrice} * ${vatPercentage} / 100</td>
		<td>${vatValue}грн</td>
	</tr>
</table>
`)