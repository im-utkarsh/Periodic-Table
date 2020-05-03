const opening_content = document.querySelector('.opening-content');
const opening_content_animation = document.querySelector('.opening-content-animation');
const arrow = opening_content.querySelector('.arrow');
const to_table = document.querySelector('.to-table');
const periodic_table = document.querySelector('.periodic-table');
const elements = periodic_table.querySelectorAll('.element');
const flip_all = periodic_table.querySelector('.flip-all');
const metals = periodic_table.querySelectorAll('.element:not(.non-metal):not(.metalloid)');
const non_metals = periodic_table.querySelectorAll('.element.non-metal');
const metalloids = periodic_table.querySelectorAll('.element.metalloid');
const guide = periodic_table.querySelector('.periodic-table-guide');
const once = {
  once : true
};
let isFirstPage = true;
let background = true;
let color1 = '#5ffef4';
let color2 = '#F04118';
let i = 0;
let a = 0;
let isBackspace = true;
let nums = [];
const textArray = [
	'Understand the Fundamentals.',
	'Thrive Extraordinary Minds.',
	'Master Periodic Table effortlessly.',
	'Evolve Critical thinking skills.',
	'Strengthen Problem Solving.',
	'Florish with Interactive Teaching.',
	'Made with ❤ on GitHub.'
];
function resetNums(){
	for (let j = 0; j < textArray.length; j++) {
		nums.push(j);
	}
}

resetNums();

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

function addingColors(target){
	color1 = color2;
	color2 = getRandomColor();
	target.style.background = `linear-gradient(135deg,${color1},${color2})`;
}

function background_change(){
	if (background) {
		addingColors(opening_content_animation);
		opening_content_animation.classList.add('active');
		background = false;
	} else {
		addingColors(opening_content);
		opening_content_animation.classList.remove('active');
		background = true;
	}
}

arrow.addEventListener('mouseenter', ()=>{
	arrow.classList.add('active');
}, once);

arrow.addEventListener('click', ()=>{
	arrow.classList.add('clicked');
	opening_content.style.animationPlayState = 'running';
	to_table.classList.add('active');
	setTimeout(function(){table_activated();}, 5400);
	
	setTimeout(()=>{
		isFirstPage = false;
	}, 4000);
}, once);

function table_activated(){
	to_table.addEventListener('click',()=>{
		to_table.classList.remove('active');
		to_table.classList.add('undo');
		periodic_table.classList.add('active');
		elements.forEach(element => {
			element.addEventListener('click', ()=>{
				element.classList.toggle('active');
			});
		});
		flip_all.addEventListener('click', ()=>{
			elements.forEach(element =>{
				element.classList.remove('active');
			});
		});
		guide.addEventListener('mouseout', ()=>{
			elements.forEach(element =>{
				element.classList.remove('hidden');
			});
		});
		guide.addEventListener('mouseover', guider);
	}, once);
	opening_content.style.display = 'none';
}

function guider(event){
	if (event.target.classList.contains('metal')) {
		elements.forEach(element => {
			if (element.classList.contains('non-metal') || element.classList.contains('metalloid') || element.classList.contains('unknown'))
				element.classList.add('hidden');
		});
	} else if (event.target.classList.contains('non-metal')) {
		elements.forEach(element =>{
			if (!element.classList.contains('non-metal'))
				element.classList.add('hidden');
		});
	}else if (event.target.classList.contains('metalloid')) {
		elements.forEach(element =>{
			if (!element.classList.contains('metalloid'))
				element.classList.add('hidden');
		});
	}else if (event.target.classList.contains('name-s')) {
		elements.forEach(element =>{
			if (!element.parentElement.parentElement.classList.contains('s-block'))
				element.classList.add('hidden');
		});
	} else if (event.target.classList.contains('name-alkali-metals')) {
		elements.forEach(element =>{
			if (!element.parentElement.classList.contains('alkali-metals'))
				element.classList.add('hidden');
		});
	} else if (event.target.classList.contains('name-alkaline-metals')) {
		elements.forEach(element =>{
			if (!element.parentElement.classList.contains('alkaline-earth-metals'))
				element.classList.add('hidden');
		});
	} else if (event.target.classList.contains('name-d')) {
		elements.forEach(element =>{
			if (!element.parentElement.parentElement.classList.contains('d-block'))
				element.classList.add('hidden');
		});
	} else if (event.target.classList.contains('name-f')) {
		elements.forEach(element =>{
			if (!element.parentElement.parentElement.classList.contains('f-block'))
				element.classList.add('hidden');
		});
	} else if (event.target.classList.contains('name-lanthanoids')) {
		elements.forEach(element =>{
			if (!element.parentElement.classList.contains('lanthanoids'))
				element.classList.add('hidden');
		});
	} else if (event.target.classList.contains('name-actinoids')) {
		elements.forEach(element =>{
			if (!element.parentElement.classList.contains('actinoids'))
				element.classList.add('hidden');
		});
	} else if (event.target.classList.contains('name-p')) {
		elements.forEach(element =>{
			if (!element.parentElement.parentElement.classList.contains('p-block'))
				element.classList.add('hidden');
		});
	} else if (event.target.classList.contains('name-chalcogens')) {
		elements.forEach(element =>{
			if (!element.parentElement.classList.contains('chalcogens'))
				element.classList.add('hidden');
		});
	} else if (event.target.classList.contains('name-halogens')) {
		elements.forEach(element =>{
			if (!element.parentElement.classList.contains('halogens'))
				element.classList.add('hidden');
		});
	} else if (event.target.classList.contains('name-noble-gases')) {
		elements.forEach(element =>{
			if (!element.parentElement.classList.contains('noble-gases'))
				element.classList.add('hidden');
		});
	}
}

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
					resetNums();
				}
				setTimeout(function(){ typeWrite(array); }, 200);
			}
		}
	}
}

setTimeout(function(){ typeWrite(textArray); }, 2000);