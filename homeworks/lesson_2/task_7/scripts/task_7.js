const monthRandomNumber = Math.floor(Math.random() * 13)
const dayRandomNumber = Math.floor(Math.random() * 7)


document.write(`
	<table border="2px">
	<tr>
		<th>Номер місяця</th>
		<td>${monthRandomNumber}</td>
	</tr>
	<tr>
		<th>Номер дня</th>
		<td>${dayRandomNumber}</td>
	</tr>
	<tr>
		<th>Сума</th>
		<td>${monthRandomNumber + dayRandomNumber}</td>
	</tr>
</table>
`)