let header = document.querySelector('header');

window.addEventListener('scroll', () => {
	header.classList.toggle('active', window.scrollY > 0);
	
}) 

let search = document.querySelector('.search-box');

 document.querySelector('#search-icon').onclick = () => {
	search.classList.toggle('active');
	menu.classList.remove('active')
 }