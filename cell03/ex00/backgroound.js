const random_hex_color_code = () => {
	let n = (Math.random() * 0xfffff * 1000000).toString(16);
	return '#' + n.slice(0, 6);
} 

function changeBackground() {
	document.body.style.backgroundColor = random_hex_color_code();
}

//https://www.30secondsofcode.org/js/s/random-hex-color-code/