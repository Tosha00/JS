const lengthInCentimeters = parseFloat(prompt("Введіть довжину у сантиметрах"))
const lengthInMeters = lengthInCentimeters / 100
const lengthInKilometers = lengthInMeters / 1000

document.write(`
	<table border="2px">
	<tr>
		<th>Довжина в сантиметрах</th>
		<td>${lengthInCentimeters}см</td>
	</tr>
	<tr>
		<th>Довжина в метрах</th>
		<td>${lengthInMeters}м</td>
	</tr>
	<tr>
		<th>Довжина в кілометрах</th>
		<td>${lengthInKilometers}кл</td>
	</tr>
</table>
`)