// make a variable to hold the pointer to our element with id container
const pointer = document.querySelector('#container');

// make another variable hold the new element to insert
const makeP = document.createElement('p');
makeP.style.color = 'red';
makeP.textContent = "Hey I'm red!";

pointer.appendChild(makeP);

const makeH3 = document.createElement('h3');
makeH3.style.color = 'blue';
makeH3.textContent = "Hey I'm a blue h3!";

pointer.appendChild(makeH3);

const mkDiv = document.createElement('div');
const mkH1 = document.createElement('H1');
const mkP = document.createElement('p');

mkDiv.appendChild(mkH1);
mkH1.textContent = "I'm in a div";
mkDiv.appendChild(mkP);
mkP.textContent = "ME TOO!";
pointer.appendChild(mkDiv);
mkDiv.style.backgroundColor = 'pink';
mkDiv.style.border = '1px, solid, black';

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
	alert("Hello, World");
});

btn.addEventListener('click', function (e) {
	console.log(e.target);
	e.target.style.background = 'blue';
});


