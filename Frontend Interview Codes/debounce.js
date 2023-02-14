const func = (e) => console.log(e);

const debounce = (func, delay) => {
	let timer;
	return (...args) => {
		if(timer) clearTimeout(timer);
		timer = setTimeout(() => {
			func(...args)
		}, delay);
	}
}

const handleChange = debounce(func, 1000);

for(let i=0; i<3; i++) {
	setTimeout(() => {
		handleChange(i);
	},500)
}
