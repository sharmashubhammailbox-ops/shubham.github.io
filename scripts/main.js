const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/chrome.png") {
    myImage.setAttribute("src", "images/mozilla.png");
  } else {
    myImage.setAttribute("src", "images/chrome.png");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
	  setUserName()
  }
  else {
  localStorage.setItem("name", myName);
  myHeading.textContent = `Chrome is cool, ${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Chrome is cool, ${storedName}`;
}
myButton.addEventListener("click", () => {
  setUserName();
});
