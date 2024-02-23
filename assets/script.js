function changeColor() {
    // Generate random RGB values
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    // Apply the new color to the body background
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

    // Display the RGB code
    document.getElementById("colorCode").textContent = "RGB Code: rgb(" + r + ", " + g + ", " + b + ")";
}