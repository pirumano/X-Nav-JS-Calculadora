var sumando1;

function printuno(){
	document.getElementById("display").innerHTML = "1";
}

function printcero(){
	document.getElementById("display").innerHTML = "0";
}

function sumar(){
	if(document.getElementById("display").innerHTML == "")
		return;
	sumando1 = document.getElementById("display").innerHTML;
	document.getElementById("display").innerHTML = "";
}

function mostrar(){
	sumando2 = document.getElementById("display").innerHTML;
	if (sumando2 == "")
		return;
	document.getElementById("display").innerHTML = "Result: " + (parseInt(sumando1) + parseInt(sumando2)) % 2;
}