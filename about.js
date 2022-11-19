console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted successfully');
}

/*let catPic = document.querySelector("Screenshot_20221118_011942.png");
catPic.addEventListener('mouseover', () => {
    alert('Wow Good job')
})*/

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);