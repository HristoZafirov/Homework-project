function test(){
	var adc = new Number(document.getElementById('zad2').value);
	var ads = document.getElementById('zad2');
	var otg = document.getElementById('otg');
	if (adc == 10) {
		ads.style.border = "2px solid green";
		otg.innerHTML = "Вашият отговор е ВЕРЕН!";
		otg.style.display = "inline-block";
	}
	else {
		ads.style.border = "2px solid red";
		otg.innerHTML = "Вашият отговор е ГРЕШЕН!";
		otg.style.display = "inline-block";
	}
}

function test2() {
	var ad1 = document.getElementsByClassName('otg')[0];
	var ad2 = document.getElementsByClassName('otg')[1];
	var ad3 = document.getElementsByClassName('otg')[2];
	var ad4 = document.getElementsByClassName('otg')[3];
	var ad5 = document.getElementsByClassName('otg')[4];
	var ad6 = document.getElementsByClassName('otg')[5];
	var btn = document.getElementById('button');
	var p = document.getElementById('otg2');
	if ( ad1.checked && ad3.checked && ad5.checked ) {
		if (ad2.checked) {
			p.style.border = "3px solid red";
			p.innerHTML = "Вашият отговор е ГРЕШЕН!";
			p.style.display = "inline-block";
			p.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
		}
		else if (ad4.checked) {
			p.style.border = "3px solid red";
			p.innerHTML = "Вашият отговор е ГРЕШЕН!";
			p.style.display = "inline-block";
			p.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
		}
		else if (ad6.checked) {
			p.style.border = "3px solid red";
			p.innerHTML = "Вашият отговор е ГРЕШЕН!";
			p.style.display = "inline-block";
			p.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
		}
		else {
		p.style.border = "3px solid green";
		p.innerHTML = "Вашият отговор е ВЕРЕН!";
		p.style.display = "inline-block";
		p.style.backgroundColor = "rgba(0, 255, 0, 0.2)";
		}
	}
	else {
		p.style.border = "3px solid red";
		p.innerHTML = "Вашият отговор е ГРЕШЕН!";
		p.style.display = "inline-block";
		p.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
	}
}