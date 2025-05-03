const	balloon = document.getElementById("balloon");
const	colors = ["red", "green", "blue"];
let		size = 200;
let		colorIndex = 0;

function updateBalloon() {
	balloon.style.width = `${size}px`;
	balloon.style.height = `${size}px`;
	balloon.style.backgroundColor = colors[colorIndex];
}

balloon.addEventListener("click", () => {
	size += 10;
	colorIndex = (colorIndex + 1) % 3;

	// explode and reset
	if (size > 420) {
		size = 200;
		colorIndex = 0;
	}
	updateBalloon();
});

balloon.addEventListener("mouseleave", () => {
	size = Math.max(200, size - 5);
	colorIndex = (colorIndex - 1 + 3) % 3;
	updateBalloon();
});