// Task 1

var resort = prompt('Введите число от 1 до 3', '1 - taba, 2 - sharm, 3 - hurgada');

var resortNumber = document.getElementById('resortNumber');
var resortName = document.getElementById('resortName');

if (resort == 1) {
	resortNumber.innerHTML = 'Введено число - 1';
	resortName.innerHTML = 'Вы выбрали курорт - taba' ;
}
else if (resort == 2) {
	resortNumber.innerHTML = 'Введено число - 2';
	resortName.innerHTML = 'Вы выбрали курорт - sharm' ;
}
else if (resort == 3) {
	resortNumber.innerHTML = 'Введено число - 3';
	resortName.innerHTML = 'Вы выбрали курорт - hurgada' ;
}
else  {
	resortNumber.innerHTML = 'Такого числа нету';
	resortName.innerHTML = 'Такого курорта нету' ;
}	


// Task 2

var resortPeople = prompt('Введите число учасников группы', '');

var taba = document.getElementById('taba');
var sharm = document.getElementById('sharm');
var hurgada = document.getElementById('hurgada');

var tabaFree = 6;
var sharmFree = 25;
var hurgadaFree = 15;
if ((resortPeople == null)||(resortPeople == '')) {
	alert('Вы передумали!');
}
else {
	if ((resortPeople >= 0) && (resortPeople%1==0)) {
		if (resortPeople<=25) {
			var sharmPeople = confirm('Согласны ли Вы быть в группе Sharm?');
			if (sharmPeople == true) {
				sharm.innerHTML = `Sharm - ${25-resortPeople} мест`;
			}
			else if (resortPeople<=15) {
				var hurgadaPeople = confirm('Согласны ли Вы быть в группе Hurgada?');
				if (hurgadaPeople == true) {
					hurgada.innerHTML = `Hurgada - ${15-resortPeople} мест`;
				}
				else if (resortPeople<=6) {
					var tabaPeople = confirm('Согласны ли Вы быть в группе Taba?');
					if (tabaPeople == true) {
						taba.innerHTML = `Taba - ${6-resortPeople} мест`;
					}
					else {
						alert('Мест нигде нету!');
					}
				}
				else {
					alert('Мест нигде нету!');
				}
			}
			else {
				alert('Мест нигде нету!');
			}
		}
		else {
			alert('Мест нигде нету!');
		}
	}
	else {
		alert('Вы ввели ошибочное число!');
	}
}
