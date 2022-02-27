function Login() {
  var username = document.getElementById("floatingInput").value;
  var password = document.getElementById("floatingPassword").value;
  if (username == "admin" && password == "admin") {
    var signin = (document.getElementById("signin").innerHTML =
      location.replace("./PAGES/dashboard.html"));
  } else {
    document.getElementById("signin").innerHTML = alert(
      "Invalid Username and Password"
    );
  }
}

function Logout() {
  location.replace("../index.html");
}
