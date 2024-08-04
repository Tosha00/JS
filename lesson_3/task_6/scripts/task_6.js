const dayNumber = parseInt(prompt("Введіть номер дня тижня"))

const mondayNumber = 1
const tuesdayNumber = 2
const wednesdayNumber = 3
const thursdayNumber = 4
const fridayNumber = 5
const saturdayNumber = 6
const sundayNumber = 7

if (dayNumber === mondayNumber) 
	alert("Це понеділок")
else if (dayNumber === tuesdayNumber) 
	alert("Це вівторок")
else if (dayNumber === wednesdayNumber) 
	alert("Це середа")
else if (dayNumber === thursdayNumber) 
	alert("Це четвер")
else if (dayNumber === fridayNumber) 
	alert("Це пятниця")
else if (dayNumber === saturdayNumber) 
	alert("Це субота")
else if (dayNumber === sundayNumber) 
	alert("Це неділя")
else 
	alert("Це число не переводиться в день тижня, спробуйте ще раз")
