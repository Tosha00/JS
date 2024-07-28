const a = parseFloat(prompt("Введіть значення змінної \"a\""))
const b = parseFloat(prompt("Введіть значення змінної \"b\""))
const c = parseFloat(prompt("Введіть значення змінної \"c\""))

const s1 = (a + 12 + b).toFixed(3)
const s2 = Math.sqrt((a + b) / (2 * a)).toFixed(3)
const s3 = Math.cbrt((a + b) * c).toFixed(3)
const s4 = Math.sin(a / -b).toFixed(3)


document.write(`
			<table border="2px">
			<tr>
				<th>Шукане</th>
				<th>Вираз з підстановкою значень</th>
				<th>Результат</th>
			</tr>

			<tr>
				<th>S1</th>
				<td>${a} + 12 + ${b}</td>
				<td>${s1}</td>
			</tr>

			<tr>
				<th>S2</th>
				<td> √[(${a} + ${b}) / (2 * ${a})]</td>
				<td>${s2}</td>
			</tr>

			<tr>
				<th>S3</th>

				<td>∛(${a} + ${b}) * ${c}</td>
				<td>${s3}</td>
			</tr>

			<tr>
				<th>S4</th>
				<td>sin(${a / -b})</td>
				<td>${s4}</td>
			</tr>
		</table>
	`)