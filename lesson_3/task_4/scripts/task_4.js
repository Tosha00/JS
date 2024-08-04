const personAge = parseInt(prompt("Введіть вік людини"))

if(personAge <= 5)
	alert("Це дитина у садочку")

else if(personAge <= 17)
	alert("Це школяр")

else if(personAge <= 22)
	alert("Це студент")

else if(personAge <= 60)
	alert("Це працівник")

else
	alert("Це пенсіонер")