 

function calcTip() {
	var totalElem = document.getElementById('total');
	var subtotal = document.getElementById('subtotal').value;
	var tip = document.getElementById('tip').value;
	var total = parseInt(subtotal) + subtotal * tip/100;
	totalElem.innerHTML = '$' + total;
}

