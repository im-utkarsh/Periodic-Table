const opening_content = document.querySelector('.opening-content');
const opening_content_animation = document.querySelector('.opening-content-animation');
const arrow = document.querySelector('.arrow');
let background = true;  // when opening-content is in front
let color1 = '#5ffef4';
let color2 = '#F04118';
let i = 0;
window.setInterval(background_change, 1500);

function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function background_change(){
	if (background) {
		color1 = color2;
		color2 = getRandomColor();
		opening_content_animation.style.background = `linear-gradient(135deg,${color1},${color2})`;
		opening_content_animation.classList.add('active');
		background = false;
	} else {
		color1 = color2;
		color2 = getRandomColor();
		opening_content.style.background = `linear-gradient(135deg,${color1},${color2})`;
		opening_content_animation.classList.remove('active');
		background = true;
	}
}
arrow.addEventListener('mouseenter', ()=>{
	arrow.classList.add('active');
});