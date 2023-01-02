// const h2 = document.createElement("h2");
// h2.textContent = "A BIT ABOUT ME:";

// document.querySelector("script").appendChild(h2);

// const imgLeahSection = document.querySelector('#leah-photo');

// imgLeahSection.addEventListener('click', (e) => {
// 	const imgLeah = e.target;
// 	imgLeah.src ="./Images/leahpic2.JPG";
// });

let replaced = false;

document.querySelector('#leah-photo').addEventListener('click', function() {
    document.querySelector('#default-image').src = replaced ? './Images/leahpic.JPG' : './Images/leahpic2.JPG';
    replaced = !replaced;
});


