alert("Спробуйте вгадати випадкове число від 1 до 5 за дві спроби.")

const randomNum = Math.floor(Math.random() * 5 + 1)
let userNum = parseInt(prompt("Спроба №1. Введіть число від 1 до 5"))

if (userNum === randomNum)
	alert ("Ви вгадали число з першої спроби!")
else {
	alert("Нажаль у вас не получилося вгадати число з першої спроби. Спробуйте ще раз")
	userNum = parseInt(prompt("Спроба №2. Введіть число від 1 до 5"))
	if (userNum === randomNum) 
		alert("Ви вгадали число з другої спроби")
	else 
		alert("Нажаль у вас не получилося вгадати число")
}



document.write(`
		<p>
			Випадкове число: ${randomNum}
		</p>
	`)
