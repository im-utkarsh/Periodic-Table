const opening_content = document.querySelector('.opening-content');
const opening_content_animation = document.querySelector('.opening-content-animation');
const arrow = document.querySelector('.arrow');
const to_table = document.querySelector('.to-table');
let isFirstPage = true;
let background = true;  // when opening-content is in front
let color1 = '#5ffef4';
let color2 = '#F04118';
let i = 0;
let a = 0;
let isBackspace = true;
let nums = [];
const textArray = [
	'Learning made Easy.',
	'Developing Great Minds.',
	'Learn Periodic Table easily.',
	'Evolve Critical thinking skills.',
	'Strengthen Problem Solving.',
	'Florish with Interactive Teaching.',
	'Made with ❤ on GitHub.'
];

for (let j = 0; j < textArray.length; j++) {
	nums.push(j);
}

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
	to_table.classList.add('active');
	setTimeout(function(){
		to_table.addEventListener('click',()=>{
			to_table.classList.remove('active');
			to_table.classList.add('undo');
	})}, 5400);
	
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
				b = Math.floor(Math.random() * nums.length);
				a=nums[b];
				nums.splice(b,1);
				if (nums.length===0) {
					for (let j = 0; j < textArray.length; j++) {
						nums.push(j);
					}
				}
				setTimeout(function(){ typeWrite(array); }, 200);
			}
		}
	}
}

setTimeout(function(){ typeWrite(textArray); }, 2000);