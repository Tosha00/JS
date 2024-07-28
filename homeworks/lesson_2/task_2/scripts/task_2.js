const birthday = parseFloat(prompt("Введіть рік народження"))
const currentYear = 2024

const age = currentYear - birthday


alert(`Ваш вік - ${age}`)

document.write(`
	<table border="2px">
	<tr>
		<th>Рік народження</th>
		<th>Поточний рік</th>
		<th>Вік користувача</th>
	</tr>

	<tr>
		<td>${birthday}</td>
		<td>${currentYear}</td>
		<td>${age}</td>

	</tr>
</table>
`)