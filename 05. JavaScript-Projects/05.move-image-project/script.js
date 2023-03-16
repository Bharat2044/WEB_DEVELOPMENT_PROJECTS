var image = document.getElementById('my-image');
var x = 0; // Initial horizontal position of image
var y = 0; // Initial vertical position of image

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 37)  // Left arrow key
        x -= 10;
    else if (event.keyCode === 38)  // Up arrow key
        y -= 10;
    else if (event.keyCode === 39)  // Right arrow key
        x += 10;
    else if (event.keyCode === 40)  // Down arrow key
        y += 10;  
    
    image.style.left = x + 'px'; // Update horizontal position of image
    image.style.top = y + 'px'; // Update vertical position of image
});
