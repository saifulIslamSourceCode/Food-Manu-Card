let menuArray = [
	{
		index: 1,
		category: 'breakfast',
		img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
		title: 'Buttermilk Pancakes',
		price: '15.99',
		text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
	},

	{
		index: 2,
		category: 'lunch',
		img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
		title: 'Diner Double',
		price: '13.99',
		text: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
	},

	{
		index: 3,
		category: 'shakes',
		img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg",
		title: 'Godzilla Milkshake',
		price: '15.99',
		text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
	},

	{
		index: 4,
		category: 'lunch',
		img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
		title: 'Country Delight',
		price: '20.99',
		text: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,"
	},

	{
		index: 5,
		category: 'dinner',
		img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg",
		title: 'Egg Attack',
		price: '15.99',
		text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
	},

	{
		index: 6,
		category: 'lunch',
		img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg",
		title: 'Oreo Dream',
		price: '18.99',
		text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
	},

	{
		index: 7,
		category: 'lunch',
		img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg",
		title: 'Bacon Overflow',
		price: '8.99',
		text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
	},

	{
		index: 8,
		category: 'shakes',
		img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg",
		title: 'American Classic',
		price: '12.99',
		text: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
	},

	{
		index: 9,
		category: 'dinner',
		img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg",
		title: 'Quarantine Buddy',
		price: '16.99',
		text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
	},

	{
		index: 10,
		category: 'lunch',
		img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg",
		title: 'Steak Dinner',
		price: '39.99',
		text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
	}
]

let section = document.getElementById('section-center');


window.addEventListener('DOMContentLoaded', (e)=>{
	displayManu (menuArray);
});



let filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach((btn)=>{

	btn.addEventListener('click',(e)=>{

		let category = e.currentTarget.dataset.id;
		let categoryMenu = menuArray.filter((item)=>{
			if(category === item.category) {
				return item;
			}
		});

		if (category === 'all') {
				displayManu (menuArray);
		} else {
				displayManu(categoryMenu);
		}
	});
});





function displayManu (menu) {
	let newMenuArray = menu.map((value)=>{
	return`<article class="single-menu">
			<div class="img-div">
				<img src=${value.img}>
			</div>
			<div class="content-div">
				<h3><span>${value.title}</span> <span>$${value.price}</span></h3>
				<p>${value.text}</p>
			</div>
		</article>`;
	});
	newMenuArray = newMenuArray.join('');
	section.innerHTML = newMenuArray;
}