// Write your code here!

// document.querySelector('h1#victory');

// const pContent = document.createElement('p');

// pContent.innerText = 'hello'

// document.getElementById('main').remove();
// let newHeader;
// newHeader = document.querySelectorAll('h1#victory')

// newHeader.innerHTML = ' Yeison is the champion'
const main = document.querySelector("#main");
main.remove();

const newHeader = document.createElement("h1");
newHeader.innerHTML = "Yeison Casado is the champion";
newHeader.id = "victory";
document.body.append(newHeader);

console.log(newHeader);
