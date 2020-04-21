const opening_content = document.querySelector('.opening-content');
const opening_content_animation = document.querySelector('.opening-content-animation');
const arrow = document.querySelector('.arrow');
let isFirstPage = true;
let background = true;  // when opening-content is in front
let color1 = '#5ffef4';
let color2 = '#F04118';
let i = 0;
let a = 0;
let isBackspace = false;
const textArray = [
	'WELCOME!!!',
	'Learning made Easy.',
	'Developing Great Minds.',
	'Learn Periodic Table easily.',
	'Evolve Critical thinking skills.',
	'Strengthen Problem Solving.',
	'Florish with Interactive Teaching.',
];

window.setInterval(()=>{
	if (isFirstPage) {
		background_change();
	}
}, 1500);

function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
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

arrow.addEventListener('click', ()=>{
	opening_content.style.animationPlayState = 'running';
	arrow.classList.add('clicked');
	setTimeout(()=>{
		isFirstPage = false;
	}, 4000);
});

function typeWrite(array){
	if (isFirstPage) {
		const sub_head = document.querySelector('.subhead');
		let str = array[a];
		if (!isBackspace) {
			if (i<str.length) {
				sub_head.textContent = sub_head.textContent + str[i];
				i++;
				setTimeout(function(){ typeWrite(array); }, 100);	
			} else if (i == str.length) {
				isBackspace = true;
				setTimeout(function(){ typeWrite(array); }, 2000);
			}
		} else {
			if (sub_head.textContent.length>0) {
				sub_head.textContent = sub_head.textContent.substring(0,sub_head.textContent.length-1);
				setTimeout(function(){ typeWrite(array); }, 50);
			}
			else{
				isBackspace = false;
				i=0;
				a = (a + 1) % array.length;
				setTimeout(function(){ typeWrite(array); }, 200);
			}
		}
	}
}

typeWrite(textArray);