// Handling of MessageForm and Eventlistener for the contactform
var messageform = document.getElementById("contact-form");
// var messageform = document.getElementById("contact-send");

if (messageform == null)
{ messageform = '';}

messageform.addEventListener('submit', (e) => {
    alert('Vi har mottagit ditt meddelande: ' + `\n` + '"' + message.value + '"' + '\n' + ' Vi återkommer till dig så fort vi kan.');
})
