window.onload = function() {
    const hueSlider = document.getElementById('hue-slider');
    const jerseyImage = document.getElementById('jersey-image');
    const colorValue = document.getElementById('color-value');
    const slider = document.getElementById('hue-slider');
    const changeImageBtn = document.getElementById('change-image-btn');
    var hueValueElement = document.getElementById("hueValue");
// Add event listeners to the "Next" and "Previous" buttons
document.getElementById("prevButton").addEventListener("click", showPreviousImage);
document.getElementById("nextButton").addEventListener("click", showNextImage);

var currentImageIndex = 0;
var images = [
"jersey1.png",
"jersey2.png",
"jersey3.png" ];

// Function to display the current image
function showCurrentImage() {
var imageElement = document.getElementById("jersey-image");
imageElement.src = images[currentImageIndex];
}

// Function to show the previous image
function showPreviousImage() {
currentImageIndex--;
if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
}
showCurrentImage();
}   

    // Function to show the next image
    function showNextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
    }
    showCurrentImage();
    }

    // Show the initial image
    showCurrentImage();

    hueSlider.addEventListener('input', function() {
        const hue = this.value;
        jerseyImage.style.filter = `hue-rotate(${hue}deg)`;

        // Get the color value of the image
        const imageColor = getColorValue(jerseyImage);
        colorValue.textContent = `Color Value: ${imageColor}`;
        // Display the hue value
        document.getElementById('hueValue').textContent = `Hue: ${hue}°`;
    
    });

    // Add click event listener to the button
    changeImageBtn.addEventListener('click', () => {
    // Replace the image source
    jerseyImage.src = jerseyImage.src.includes('jersey1.png') ? 'jersey2.png' : 'jersey3.png';
    });



}


