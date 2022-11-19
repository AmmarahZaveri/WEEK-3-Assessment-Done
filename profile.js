function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been not submitted successfully');
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function colorBut(evt) {
	evt.preventDefault();
	
	alert('Green is my favorite');
}

let button = document.querySelector('#place');

button.addEventListener(colorBut);

