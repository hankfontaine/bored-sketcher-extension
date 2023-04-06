const root = document.getElementById('root');

const header = document.createElement('h1');
header.innerText = 'Coloring Nook';
root.appendChild(header);

// create a container
const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
root.appendChild(mainContainer);

// create a grid container
const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');
mainContainer.appendChild(gridContainer);

let num = 100;
let bombValArr = [11, 27, 53, 74];

let closeArr = [
	3, 5, 6, 7, 8, 9, 13, 15, 19, 23, 25, 29, 30, 31, 32, 33, 34, 35, 39, 41, 45,
	46, 47, 48, 49, 51, 55, 56, 61, 66, 71, 72, 76, 82, 86, 92, 93, 94, 95, 96,
];

let nearbyArr = [
	0, 1, 2, 10, 12, 20, 21, 22, 16, 17, 18, 26, 28, 36, 37, 38, 42, 43, 44, 52,
	54, 62, 63, 64, 65, 73, 75, 83, 84, 85,
];

// generate random num
// push to bombValArr

// create gridded divs
// we have a container
for (let i = 0; i < num; i++) {
	const newDiv = document.createElement('div');
	newDiv.classList.add('grid-square');

	// newDiv.append(i);

	// if bomb
	if (bombValArr.includes(i)) {
		newDiv.addEventListener('mouseover', () => {
			if (!newDiv.innerText) {
				// newDiv.append('☠');
			}
			newDiv.classList.add('grid-square-bomb');
		});
	} else if (closeArr.includes(i)) {
		newDiv.addEventListener('mouseover', () => {
			newDiv.classList.add('grid-square-close');
		});
	} else if (nearbyArr.includes(i)) {
		newDiv.addEventListener('mouseover', () => {
			newDiv.classList.add('grid-square-closer');
		});
	} else {
		// else
		newDiv.addEventListener('mouseover', () => {
			newDiv.classList.add('grid-square-changed');
		});
	}

	gridContainer.appendChild(newDiv);
}
