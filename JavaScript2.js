var number1 = 0;
var symbol = "";
function DoAdd() {
	var Value1 = new Number(document.getElementById('Field').value);
	number1 = Value1;
	symbol = "+";
	document.getElementById("Field").setAttribute("value", "");
}
function DoSub() {
	var Value1 = new Number(document.getElementById('Field').value);
	number1 = Value1;
	symbol = "-";
	document.getElementById("Field").setAttribute("value", "");
}
function DoMul() {
	var Value1 = new Number(document.getElementById('Field').value);
	number1 = Value1;
	symbol = "*";
	document.getElementById("Field").setAttribute("value", "");
}
function DoDiv() {
	var Value1 = new Number(document.getElementById('Field').value);
	number1 = Value1;
	symbol = "/";
	document.getElementById("Field").setAttribute("value", "");
}
function ClearResult(){
	document.getElementById('Field').setAttribute("value", "");
	symbol = "";
}
function Result(){
	var number2 = new Number(document.getElementById("Field").value);
	if (symbol == "+") {
	document.getElementById("Field").setAttribute("value", number1 + number2);
	} else if (symbol == "-") {
		document.getElementById("Field").setAttribute("value", number1 - number2);
	} else if (symbol == "*") {
		document.getElementById("Field").setAttribute("value", number1 * number2);
	} else {
		document.getElementById("Field").setAttribute("value", number1 / number2);
	}
}
//===============================================================
function AddDot(){
	var Value1 = new String(document.getElementById("Field").value);
	document.getElementById("Field").setAttribute("value", Value1 + ".");
}
function Add0(){
	var Value1 = new String(document.getElementById("Field").value);
	document.getElementById("Field").setAttribute("value", Value1 + "0");
}
function Add1(){
	var Value1 = new String(document.getElementById("Field").value);
	document.getElementById("Field").setAttribute("value", Value1 + "1");
}
function Add2(){
	var Value1 = new String(document.getElementById("Field").value);
	document.getElementById("Field").setAttribute("value", Value1 + "2");
}
function Add3(){
	var Value1 = new String(document.getElementById("Field").value);
	document.getElementById("Field").setAttribute("value", Value1 + "3");
}
function Add4(){
	var Value1 = new String(document.getElementById("Field").value);
	document.getElementById("Field").setAttribute("value", Value1 + "4");
}
function Add5(){
	var Value1 = new String(document.getElementById("Field").value);
	document.getElementById("Field").setAttribute("value", Value1 + "5");
}
function Add6(){
	var Value1 = new String(document.getElementById("Field").value);
	document.getElementById("Field").setAttribute("value", Value1 + "6");
}
function Add7(){
	var Value1 = new String(document.getElementById("Field").value);
	document.getElementById("Field").setAttribute("value", Value1 + "7");
}
function Add8(){
	var Value1 = new String(document.getElementById("Field").value);
	document.getElementById("Field").setAttribute("value", Value1 + "8");
}
function Add9(){
	var Value1 = new String(document.getElementById("Field").value);
	document.getElementById("Field").setAttribute("value", Value1 + "9");
}
function Clearing(){
	var Value1 = new String(document.getElementById("Field").value);
	Value1 = Value1.slice(0, -1);
	document.getElementById("Field").setAttribute("value", Value1);
}
//=================== DO FUNCTIONS ===============================