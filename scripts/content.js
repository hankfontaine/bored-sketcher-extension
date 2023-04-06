const imgArr = document.querySelectorAll('img');
imgArr.forEach((img) => {
	img.style.borderRadius = '90px';
	// img.style.background = "url('images/sunflowers.png')";
	// background-color: goldenrod;
});

// const article = document.querySelector('article');
// // `document.querySelector` may return null if the selector doesn't match anything.
// if (article) {
// 	const text = article.textContent;
// 	const wordMatchRegExp = /[^\s]+/g; // Regular expression
// 	const words = text.matchAll(wordMatchRegExp);
// 	// matchAll returns an iterator, convert to array to get word count
// 	const wordCount = [...words].length;
// 	const readingTime = Math.round(wordCount / 200);
// 	const badge = document.createElement('p');
// 	// Use the same styling as the publish information in an article's header
// 	badge.classList.add('color-secondary-text', 'type--caption');
// 	badge.textContent = `⏱️ ${readingTime} min read TEST`;

// 	// Support for API reference docs
// 	const heading = article.querySelector('h1');
// 	// Support for article docs with date
// 	const date = article.querySelector('time')?.parentNode;

// 	(date ?? heading).insertAdjacentElement('afterend', badge);
// }

const divArr = document.querySelectorAll('div', 'footer');

for (let i = 0; i < divArr.length; i++) {
	divArr[i].innerHTML = '';
	divArr[i].innerHTML = '🌻';
	divArr[i].style.color = 'brown';
	divArr[i].style.fontSize = '6em';
	divArr[i].style.backgroundColor = 'green';
}

const text = document.querySelectorAll(
	'h1, h2, h3, h4, h5, p, li, td, caption, span, a, header'
);

for (let i = 0; i < text.length; i++) {
	// if (text[i].innerHTML.includes('')) {

	text[i].innerHTML = '';
	text[i].innerHTML = '🌻';
	text[i].style.color = 'brown';
	text[i].style.fontSize = '6em';

	// text[i].innerHTML = text[i].innerHTML.replace('the', 'SUNFLOWER');
	// }
}

const appDataContainer = document.createElement('div');
appDataContainer.classList.add('app-data-container');
appDataContainer.style.height = '20vh';
appDataContainer.style.width = '20vh';
appDataContainer.style.backgroundColor = 'babyblue';
appDataContainer.style.display = 'flex';
appDataContainer.style.marginLeft = '10vw';
appDataContainer.style.marginTop = '10vw';
appDataContainer.style.alignItems = 'center';
appDataContainer.style.justifyContent = 'center';

header.prepend(appDataContainer);
document.body.prepend(appDataContainer);

async function getWeather(city) {
	try {
		const response = await fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=pittsburgh&appid=58450b382c323f3768b7db13df9825b8',
			{ mode: 'cors' }
		);
		const cityData = await response.json();

		console.log(cityData);

		appDataContainer.append(
			`temp is: ` + cityData.main.temp + `Kelvin.  Go look at some sunflowers!`
		);
	} catch (err) {
		appDataContainer.innerHTML = '';
		const errorSpace = document.createElement('div');
		appDataContainer.appendChild(errorSpace);
	}
}

getWeather('New York City');
