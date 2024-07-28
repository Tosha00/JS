const seconds = parseFloat(prompt("Введіть кількість секунд, що пройшли від початку доби"))

const secondsInHour = 3600
const secondsInMinute = 60

const hoursFromDay = parseInt(seconds / secondsInHour)
const minutesFromDay = parseInt(seconds % secondsInHour / secondsInMinute)
const secondsFromDay = seconds - (hoursFromDay * secondsInHour + minutesFromDay * secondsInMinute)

alert(`Від початку дня пройшло ${hoursFromDay}г ${minutesFromDay}хв ${secondsFromDay}с`)

document.write(`
	<table border="2px">
	<tr>
		<th>Пройшло секунд</th>
	</tr>
	<tr>
		<td>${seconds}</td>
	</tr>
	<tr>
		<th>Перевід в формат: години:хвилини:секунди</th>
	</tr>
	<tr>
		<td>${hoursFromDay}Г:${minutesFromDay}ХВ:${secondsFromDay}С</td>
	</tr>
</table>
`)