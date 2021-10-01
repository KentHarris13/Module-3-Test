console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}
type="text/javascript">
function showMessage() {
	alert("Submitted Successful");
	}
// const yeet = document.querySelector('yeet')

// yeet.addEventListener('mouseover',function(){"Remember Remember The Fifth November"} )


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);