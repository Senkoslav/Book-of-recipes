let header = document.querySelector('header');
let menu = document.querySelector('menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
	header.classList.toggle('active', window.scrollY > 0);
	
}) 

let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
	search.classList.toggle('active');
	menu.classList.remove('active')
}

menu.onclick = () => { 
	navbar.classList.toggle('active')
}
window.onscroll = () => {
	navbar.classList.remove('active')
}