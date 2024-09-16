const menu = document.getElementById('menu-icon');
const navList = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navList.classList.toggle('open');
}
