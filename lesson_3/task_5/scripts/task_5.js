let driverCategory = prompt("Введіть назву категорії водія")
driverCategory = driverCategory.toUpperCase()

if (driverCategory === "A") 
	alert("Водій може керувати мотоциклом")

else if (driverCategory === "B")
	alert("Водій може керувати легковим автомобілем")

else if (driverCategory === "С")
	alert("Водій може керувати вантажним автомобілем")

else
	alert("Категорію не знайдено")