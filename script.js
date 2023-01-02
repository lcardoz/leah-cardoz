// const h2 = document.createElement("h2");
// h2.textContent = "A BIT ABOUT ME:";

// document.querySelector("script").appendChild(h2);

const imgLeahSection = document.querySelector('#leah-photo');

imgLeahSection.addEventListener('click', (e) => {
	const imgLeah = e.target;
	imgLeah.src =
		'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F04%2Ffunimation-how-to-make-naruto-ramen-recipe-000.jpg?w=960&cbr=1&q=90&fit=max';
});
