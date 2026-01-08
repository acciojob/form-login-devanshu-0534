function getFormvalue() {
    //Write your code here
	  event.preventDefault();

  // Access the form
  const form = document.getElementById("form1");

  const firstName = form.fname.value.trim();
  const lastName = form.lname.value.trim();

  alert(firstName + " " + lastName);

}
