let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/puffins.jpg') {
      myImage.setAttribute ('src','images/red-panda.png');
    } else {
      myImage.setAttribute ('src','images/puffins.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}


let myVariable = 'Bob';
myVariable;


function multiply(num1,num2) {  // another comment (no line breaks)
  let result = num1 * num2;
return result; /* a comment in JS (line breaks)*/
}

multiply(4, 7);