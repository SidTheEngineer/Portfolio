window.onload = function(event) {

	var contact = document.getElementById("contact");
	var projectContainer = document.getElementById("projectContainer");

	contact.addEventListener("click", scrollToContact);
}

function scrollToContact(event) {
	var contactContainer = document.getElementById("contactInfoContainer");
	contactContainer.scrollIntoView({
		behavior: "smooth"
	});
}
