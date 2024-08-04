const productPrice = parseFloat(prompt("Введіть ціну товару"))
const money = parseFloat(prompt("Введіть кількість грошей"))

if (money >= productPrice) {
	alert("Покупка вдалась")
	if (money - productPrice >= 4) {
		const lottery = confirm("Ви б не хотіли додатково придбати лотерею за 4грн?")
		if (lottery) {
			alert("Хай вам пощастить")
		}
		else("Гарного вам дня")
	}
}
else alert("У вас не вистачає грошей, щоб придбати цей товар")