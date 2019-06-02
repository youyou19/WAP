/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function calcTip() {
	var totalElem = document.getElementById('total');
	var subtotal = document.getElementById('subtotal').value;
	var tip = document.getElementById('tip').value;
	var total = parseInt(subtotal) + subtotal * tip/100;
	totalElem.innerHTML = '$' + total;
}

