const $ = function (id) {
  return document.getElementById(id);
};

const fname = localStorage.getItem("first-name");
const lname = localStorage.getItem("last-name");
const email = localStorage.getItem("e-mail");
const password = localStorage.getItem("password");

$("cname").value = fname + " " + lname;
$("email").value = email;

function sForm() {
  const fullname = fname + " " + lname;
  const name = $("cname").value;
  const mail = $("email").value;
  const pass = $("password").value;
  const message = $("message").value;
  let isvalid = true;

  $("errorMessage").innerHTML = "<p>" + "" + "</p>";
  if (name == null || name == "") {
    $("errorMessage").innerHTML += "<p>" + "name is empty" + "</p>";
    $("cname").style.borderColor = "red";
    $("errorMessage").style.color = "red";
    isvalid = false;
  } else if (name != fullname) {
    $("errorMessage").innerHTML += "<p>" + "name Does not match" + "</p>";
    $("cname").style.borderColor = "red";
    $("errorMessage").style.color = "red";
    isvalid = false;
  } else {
    $("cname").style.borderColor = "green";
  }
  if (mail == null || mail == "") {
    $("errorMessage").innerHTML += "<p>" + "Email is empty" + "</p>";
    $("email").style.borderColor = "red";
    $("errorMessage").style.color = "red";
    isvalid = false;
  } else if (mail != email) {
    $("errorMessage").innerHTML += "<p>" + "incorrect Email" + "</p>";
    $("errorMessage").style.color = "red";
    $("email").style.borderColor = "red";
    isvalid = false;
  } else {
    $("email").style.borderColor = "green";
  }
  if (pass == null || pass == "") {
    $("errorMessage").innerHTML += "<p>" + "Password is empty" + "</p>";
    $("errorMessage").style.color = "red";
    $("password").style.borderColor = "red";
    isvalid = false;
  } else if (pass != password) {
    $("errorMessage").innerHTML += "<p>" + "Wrong password" + "</p>";
    $("errorMessage").style.color = "red";
    $("password").style.borderColor = "red";
    isvalid = false;
  } else {
    $("password").style.borderColor = "grey";
  }
  if (message == null || message == "") {
    $("errorMessage").innerHTML += "<p>" + "message is empty" + "</p>";
    $("errorMessage").style.color = "red";
    $("message").style.borderColor = "red";
    isvalid = false;
  } else {
    $("message").style.borderColor = "green";
  }
  if (isvalid == true) {
    $("cname").style.borderColor = "green";
    $("email").style.borderColor = "green";
    $("password").style.borderColor = "green";
    $("message").style.borderColor = "green";
    $("errorMessage").innerHTML +=
      "<p>" + "Your message will be sent!" + "</p>";
    $("errorMessage").style.color = "green";
  }
}
function Reset() {
  $("errorMessage").innerHTML = "<p>" + "" + "</p>";
  $("cname").style.borderColor = "grey";
  $("email").style.borderColor = "grey";
  $("password").style.borderColor = "grey";
  $("message").style.borderColor = "grey";

  $("cname").value = "";
  $("email").value = "";
  $("password").value = "";
  $("message").value = "";
}
