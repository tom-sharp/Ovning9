console.log("-------------- bishbosh.js -------------");


const submitButton = document.getElementById('btnSubmit');
const clearButton = document.getElementById('btnClear');
const bishboshResult = document.getElementById('rline');

submitButton.addEventListener('click', processInput);


function processInput(event) {
	event.preventDefault();
	let bish = document.querySelector('#inputBish').value;
	let bosh = document.querySelector('#inputBosh').value;
	let num = document.querySelector('#inputNumbers').value;
	//	let bish = document.getElementById('inputBish').value;
	//	let bosh = document.getElementById('inputBosh').value;
	//	let num = document.getElementById('inputNumbers').value;
	let res = BishBosh(bish, bosh, num);
	if (res.length === 0) {
		showErrMessage("Invalid Input, values must be integers and greater that 1");
	}
	else {
		showSuccessMessage("Success");
		BishBoshResult(res);
	}
}

clearButton.addEventListener('click', function() {
	console.log("BUTTON CLICK");
});

function showPageTitle(title) {
	document.getElementById('pagetitle').textContent = title;
}

function showMessage(message) {
	document.getElementById('message').textContent = message;
}

function showErrMessage(message) {
	if (message) {
		document.getElementById('errormsg').textContent = message;
		document.getElementById('successmsg').textContent = "";
	}
	else {
		document.getElementById('errormsg').textContent = "";
	}
}

function showSuccessMessage(message) {
	if (message) {
		document.getElementById('successmsg').textContent = message;
		document.getElementById('errormsg').textContent = "";
	}
	else {
		document.getElementById('successmsg').textContent = "";
	}
}





// Bish-Bosh 1.0 Implementation

function BishBoshLog(bish, bosh, numbers) {
	let abish = 0;
	let abosh = 0;
	for (i = 1; i < numbers; i++) {
		abish = i % bish; abosh = i % bosh;
		if ((abish) && (abosh)) console.log(i);
		else if ((!abish) && (!abosh)) console.log('Bish-Bosh');
		else if (!abish) console.log('Bish');
		else if (!abosh) console.log('Bosh');
		else console.log('Debug this, Please');
	}
}


// Bish-Bosh 2.0 Implementation

function BishBosh(bish, bosh, numbers) {
	let res = [];
	let abish = 0;
	let abosh = 0;
	bish = Number.parseInt(bish); bosh = Number.parseInt(bosh); numbers = Number.parseInt(numbers);
	if ((Number.isNaN(bish)) || (Number.isNaN(bosh)) || (Number.isNaN(numbers))) return res;
	if ((bish < 2) || (bosh < 2) || (bish < 2)) return res;
	for (i = 1; i <= numbers; i++) {
		abish = i % bish; abosh = i % bosh;
		if ((abish) && (abosh)) res.push(i);
		else if ((!abish) && (!abosh)) res.push('Bish-Bosh');
		else if (!abish) res.push('Bish');
		else if (!abosh) res.push('Bosh');
		else res.push('Debug this, Please');
		console.log("bish-bosh");
	}
	return res;
}


function BishBoshResult(result) {
	
	for (i = 0; i < result.length; i++) {
		document.getElementById('rline').innerHTML += '<p>' + result[i] + '</p>';
	}

}



////////////////////////////////////////////////////

showPageTitle("BishBosh");

console.log("------ Bish-Bosh 1.0 ------");
BishBoshLog(3, 4, 100);

