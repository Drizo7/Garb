function desg() {
  var a;
  a = document.getElementById("designation");
  setTimeout(function () {
      a.innerHTML = "I'm a Mobile Developer";
    }, 0);
  setTimeout(function () {
    a.innerHTML = "I'm a Digital Marketer";
    }, 1000);
    setTimeout(function () {
      a.innerHTML = "I'm a Cyber Security Proffesional";
      }, 2000);
}

desg();
setInterval(desg, 3000);