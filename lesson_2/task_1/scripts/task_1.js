const a = parseFloat(prompt("Введіть значення змінної \"a\""))
const b = parseFloat(prompt("Введіть значення змінної \"b\""))

const sum = a + b
const product = a * b
const quotient = (a / b).toFixed(2)



document.write(`
			<table border="2px">
			<tr>
				<th>Значення змінної A</th>
				<th>Значення змінної B</th>
				<th>Сума</th>
				<th>Добуток</th>
				<th>Частка</th>
			</tr>

			<tr>
				<td>${a}</td>
				<td>${b}</td>
				<td>${sum}</td>
				<td>${product}</td>
				<td>${quotient}</td>
			</tr>
		</table>
	`)