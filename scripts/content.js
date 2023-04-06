const article = document.querySelector('article');

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
	const text = article.textContent;
	const wordMatchRegExp = /[^\s]+/g; // Regular expression
	const words = text.matchAll(wordMatchRegExp);
	// matchAll returns an iterator, convert to array to get word count
	const wordCount = [...words].length;
	const readingTime = Math.round(wordCount / 200);
	const badge = document.createElement('p');
	// Use the same styling as the publish information in an article's header
	badge.classList.add('color-secondary-text', 'type--caption');
	badge.textContent = `⏱️ ${readingTime} min read TEST`;

	// Support for API reference docs
	const heading = article.querySelector('h1');
	// Support for article docs with date
	const date = article.querySelector('time')?.parentNode;

	(date ?? heading).insertAdjacentElement('afterend', badge);
}

// const text = document.querySelectorAll(
// 	'h1, h2, h3, h4, h5, p, li, td, caption, span, a, div'
// );
// for (let i = 0; i < text.length; i++) {
// 	if (text[i].innerHTML.includes('')) {
// 		text[i].innerHTML = text[i].innerHTML.replace('', 'sunflower');
// 	}
// }
// console.log('test');
