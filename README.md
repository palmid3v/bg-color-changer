# BG Color Changer
BG Color Changer is a simple JavaScript project that dynamically changes the background color of a webpage to a random RGB color whenever the user triggers it.

# How it Works
The project consists of a single JavaScript function called changeColor(). Here's how it works:

Generate Random RGB Values: The function generates random values for red (r), green (g), and blue (b) components using the Math.random() function. Each component ranges from 0 to 255.

Apply New Color: It then applies the newly generated RGB color to the background of the webpage's body by setting the document.body.style.backgroundColor property.

Display RGB Code: The RGB code of the generated color is displayed below the background color, allowing users to see the exact color code used.

# Usage
To use the BG Color Changer:

Include the script.js file in your HTML document.
Call the changeColor() function whenever you want to change the background color.
html
Copy code
<script src="script.js"></script>
Optionally, you can display the RGB code by adding an element with the id "colorCode" where you want the code to be displayed.
html
Copy code
<p id="colorCode">RGB Code: rgb(0, 0, 0)</p>

<!-- # Demo -->

Feel free to adjust the content according to your preferences and project specifics!