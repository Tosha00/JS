const firstChildName = prompt("Введіть ім'я першої дитини")
const secondChildName = prompt("Введіть ім'я другої дитини")

const firstChildCandies = parseInt(prompt("Введіть кількість цукерок першої дитини"))
const secondChildCandies = parseInt(prompt("Введіть кількість цукерок другої дитини"))


if (firstChildCandies > secondChildCandies)
	alert(`${firstChildName}`)

if (firstChildCandies < secondChildCandies) 
	alert(`${secondChildName}`)
else 
	alert("Кількість цукерок у дітей однакова")