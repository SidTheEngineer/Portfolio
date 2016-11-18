window.onload = function(event) {

	var contact = document.getElementById("contact");

	contact.addEventListener("click", scrollToContact);

}

function scrollToContact(event) {
	var contactContainer = document.getElementById("contactInfoContainer");
	contactContainer.scrollIntoView({
		behavior: "smooth"
	});
}
