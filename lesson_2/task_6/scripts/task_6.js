const firstProductPrice = parseFloat(prompt("Введіть ціну першого товару")).toFixed(2)
const secondProductPrice = parseFloat(prompt("Введіть ціну другого товару")).toFixed(2)
const thirdProductPrice = parseFloat(prompt("Введіть ціну третього товару")).toFixed(2)

const firstProductQuantity = parseInt(prompt("Введіть кількість першого товару"))
const secondProductQuantity = parseInt(prompt("Введіть кількість другого товару"))
const thirdProductQuantity = parseInt(prompt("Введіть кількість третього товару"))

const firstProductTotal = parseFloat(firstProductPrice * firstProductQuantity.toFixed(2))
const secondProductTotal = parseFloat(secondProductPrice * secondProductQuantity.toFixed(2))
const thirdProductTotal = parseFloat(thirdProductPrice * thirdProductQuantity.toFixed(2))

const totalPrice = (firstProductTotal + secondProductTotal + thirdProductTotal)


document.write(`
	<table border="2px">
	<tr>
		<th>Товар</th>
		<th>Вартість одиниці товару</th>
		<th>Кількість товару</th>
		<th>Ціна</th>
	</tr>
	<tr>
		<th>#1</th>
		<td>${firstProductPrice}грн</td>
		<td>X${firstProductQuantity}</td>
		<td>${firstProductTotal}грн</td>
	</tr>
	<tr>
		<th>#2</th>
		<td>${secondProductPrice}грн</td>
		<td>X${secondProductQuantity}</td>
		<td>${secondProductTotal}грн</td>
	</tr>
	<tr>
		<th>#3</th>
		<td>${thirdProductPrice}грн</td>
		<td>X${thirdProductQuantity}</td>
		<td>${thirdProductTotal}грн</td>
	</tr>
	<tr>
		<th>Загальна вартість усього товару</th>
	</tr>
	<tr>
		<td>${totalPrice}грн</td>
	</tr>
</table>
`)