window.setInterval(function SetDailyFInterval(){
	document.getElementById('dailyFashion').style.visibility = "visible";
	document.getElementById('dailyFashion').style.animation = "DailyFashion 1s ease-in-out 0s 1 normal";
}, 1000);
window.setInterval(function setArrowIntervall(){
	document.getElementById('arrow').style.visibility = "visible";
	document.getElementById('arrow').style.animation = "arrowDown 0.8s ease-in-out 0s 1 normal";
}, 1900);
window.setInterval(function setWilliams(){
	document.getElementById('heady').style.visibility = "visible";
	document.getElementById('heady').style.animation = "williams .8s ease-in-out 0s 1 normal";
}, 300);
 
function lightBoxShow() {
	document.getElementById('lightBoxCV').style.display = "block";
}
function lightBoxMovieShow() {
	document.getElementById('lightBoxMovie').style.display = "block";
}
function lightBoxSongShow() {
	document.getElementById('lightBoxSong').style.display = "block";
}
function lightBoxExerciseShow() {
	document.getElementById('lightBoxExercise').style.display = "block";
}
function lightBoxSiteShow() {
	document.getElementById('lightBoxSite').style.display = "block";
}
function lightBoxHide() {
	document.getElementById('lightBoxCV').style.display = "none";
	document.getElementById('lightBoxMovie').style.display = "none";
	document.getElementById('lightBoxSong').style.display = "none";
	document.getElementById('lightBoxExercise').style.display = "none";
	document.getElementById('lightBoxSite').style.display = "none";
}

function showNewss(){
	document.getElementById('newsArrow').style.display = "none";
	document.getElementById('newsArrow2').style.display = "block";
	document.getElementById('news').style.animation = "showNews 0.8s ease-in-out 0s 1 normal";
	document.getElementById('news').style.left = "-2%";
}
function hideNewss(){
	document.getElementById('newsArrow').style.display = "block";
	document.getElementById('newsArrow2').style.display = "none";
	document.getElementById('news').style.animation = "hideNews 0.5s ease-in-out 0s 1 normal";
	document.getElementById('news').style.left = "-18%";
}
function hideAD(){
	document.getElementById('ad').style.display = "none";
}
function showPromo(){
window.setTimeout(function showPromotion(){
	document.getElementsByClassName('promotionBox')[0].style.display = "block";
	document.getElementsByClassName('promoEffect')[0].style.animation = "arrowDown 0.7s ease-in-out 0s 1 normal";
}, 3000);
}
function hidePromo(){
document.getElementsByClassName('promotionBox')[0].style.display ='none';
window.setTimeout(function showNewss(){
	document.getElementById('newsArrow').style.display = "none";
	document.getElementById('newsArrow2').style.display = "block";
	document.getElementById('news').style.animation = "showNews 0.8s ease-in-out 0s 1 normal";
	document.getElementById('news').style.left = "-2%";
}, 2000);
}

function changeToGoToPromo() {
	document.getElementById('leaver').innerHTML = "Поръчай сега";
}
function changeToPromo() {
	document.getElementById('leaver').innerHTML = "промоция";
}
function clearPromo() {
	document.getElementsByClassName('promotionBox')[0].style.display = "none";
	window.setTimeout(function showNewss(){
		document.getElementById('newsArrow').style.display = "none";
		document.getElementById('newsArrow2').style.display = "block";
		document.getElementById('news').style.animation = "showNews 0.8s ease-in-out 0s 1 normal";
		document.getElementById('news').style.left = "-2%";
	}, 2000);
}
