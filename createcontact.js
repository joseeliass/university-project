const $ = function (id) {
  return document.getElementById(id);
};
function submitForm() {
  var fname = $("firstname").value;
  var lname = $("lastname").value;
  var email = $("email").value;
  var pass = $("password").value;
  var repass = $("retypepassword").value;
  var isvalid = true;

  $("content").innerHTML = "<p>" + "" + "</p>";
  if (fname == null || fname == "") {
    isvalid = false;
    $("firstname").style.borderColor = "red";
    $("content").innerHTML += "<p>" + "first name is empty" + "</p>";
    $("content").style.color = "red";
    $("content").style.color = "red";
  } else {
    $("firstname").style.borderColor = "green";
  }

  if (lname == null || lname == "") {
    $("lastname").style.borderColor = "red";
    isvalid = false;
    $("content").innerHTML += "<p>" + "last name is empty" + "</p>";
    $("content").style.color = "red";
  } else {
    $("lastname").style.borderColor = "green";
  }
  if (email == null || email == "") {
    $("email").style.borderColor = "red";
    isvalid = false;
    $("content").innerHTML += "<p>" + "email is empty" + "</p>";
    $("content").style.color = "red";
  } else {
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    if (!validateEmail(email)) {
      $("email").style.borderColor = "red";
      isvalid = false;
      $("content").innerHTML += "<p>" + "invalid email" + "</p>";
      $("content").style.color = "red";
    } else {
      $("email").style.borderColor = "green";
    }
  }
  if (pass == null || pass == "") {
    $("password").style.borderColor = "red";
    isvalid = false;
    $("content").innerHTML += "<p>" + "password is empty" + "</p>";
    $("content").style.color = "red";
  } else {
    $("password").style.borderColor = "green";
  }
  if (repass == null || repass == "") {
    $("retypepassword").style.borderColor = "red";
    isvalid = false;
    $("content").innerHTML += "<p>" + "retyping password is empty" + "</p>";
    $("content").style.color = "red";
  } else if (pass != repass) {
    $("retypepassword").style.borderColor = "red";
    $("password").style.borderColor = "red";
    isvalid = false;
    $("content").innerHTML += "<p>" + "passwords should match" + "</p>";
    $("content").style.color = "red";
  } else {
    $("retypepassword").style.borderColor = "green";
  }
  if (isvalid == true) {
    $("firstname").style.borderColor = "green";
    $("lastname").style.borderColor = "green";
    $("email").style.borderColor = "green";
    $("password").style.borderColor = "green";
    $("retypepassword").style.borderColor = "green";

    const form = $("contactForm");
    form.addEventListener("click", function (e) {
      e.preventDefault();

      const fnameValue = $("firstname").value;
      const lnameValue = $("lastname").value;
      const emailValue = $("email").value;
      const passwordValue = $("password").value;

      localStorage.setItem("first-name", fnameValue);
      localStorage.setItem("last-name", lnameValue);
      localStorage.setItem("e-mail", emailValue);
      localStorage.setItem("password", passwordValue);

      window.location.href = "contacts.html";
    });
  }
}
function Reset() {
  $("content").innerHTML = "<p>" + "" + "</p>";
  $("firstname").style.borderColor = "grey";
  $("lastname").style.borderColor = "grey";
  $("email").style.borderColor = "grey";
  $("password").style.borderColor = "grey";
  $("retypepassword").style.borderColor = "grey";
}
