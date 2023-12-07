function setCookie(cname, cvalue, ex) {
  const d = new Date();
  d.setTime(d.getTime() + ex * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function checkCookie() {
  let username = getCookie("name");
  if (username != "") {
    alert("Welcome again " + username);
  } else {
    username = prompt("Please enter your name:", "");
    if (username != "" && username != null) {
      setCookie("name", username, 365);
    }
  }
}
function deleteCookie() {
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// ================================= Add css
// setTimeout(function () {
//   const demostyle = document.querySelector("#demostyle");
//   demostyle.style.color = "red";
//   demostyle.style.fontSize = "25px";
//   demostyle.style.boxSizing = "border-box";
//   demostyle.style.fontWeight = "bold";
// }, 3000);

// ========================addEventListener() method =======================
let a = 5;
let b = 3;
function myfn(a, b) {
  // console.log(txt);
  alert(a * b);
}
const button = document.querySelector("#btn"); //document.getElementById("btn");

button.addEventListener("click", () => {
  myfn(a, b);
});

const textcolor = document.querySelector("#txtcolor");

textcolor.addEventListener("click", colorfb);
function colorfb() {
  setTimeout(() => {
    textcolor.style.color = "red";
  }, 1000);
  setTimeout(() => {
    textcolor.innerHTML = "Goodby";
  }, 2000);
  setTimeout(() => {
    textcolor.style.visibility = "hidden";
  }, 3000);
}
