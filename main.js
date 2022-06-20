// defined variables
var pick = document.getElementById('colorPicker'); // Select color input
var canvas = document.getElementById('pixelCanvas'); // Canvas
var gsize = document.getElementById('sizePicker'); // Select size input

gsize.addEventListener("submit", function(event) {
	event.preventDefault(); // Prevents page from refreshing when submit is clicked
	canvas.innerHTML = "";
	var width = document.getElementById('inputWidth').value; // Grid width
	var height = document.getElementById('inputHeight').value; // Grid height

	makeGrid(width, height);
	console.log(width, height); // Testing my code
});

function makeGrid(width, height) {

	for (let i = 0; i < height; i++) { //Loops through to make the rows
		const tr = document.createElement("tr"); // Creates row variable
		canvas.appendChild(tr); // Appends the rows to the canvas
		for (let w = 0; w < width; w++) { // Loops throught to make columns
			const td = document.createElement("td"); // Creates column variable
			tr.appendChild(td); // Appends the columns to the rows
			td.addEventListener("click", function(event) {
				let color = pick.value;
				event.target.style.backgroundColor = color;
			});
		}
	}}