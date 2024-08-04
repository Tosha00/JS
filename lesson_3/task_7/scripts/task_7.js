const monthNum = parseInt(prompt("Введіть номер місяця"))
if (monthNum !== 0 && monthNum <= 12) {
	if (monthNum === 12 || monthNum <= 2)
		alert("Це зима")

	else if(monthNum <= 5)
		alert ("Це весна")

	else if(monthNum <=8)
		alert("Це літо")

	else
		alert("Це осінь")
} 
else
	alert("Це число не може бути номером місяця")