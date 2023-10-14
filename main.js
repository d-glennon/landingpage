// Get references to the button and the image element
const picSwitcher = document.getElementById('switcher');
const imageContainer = document.getElementById('imgcontainer');
// Import the pictures to cycle through
const imageArray = ['resources/images/darraghLive2.jpg', 'resources/images/darraghLive.jpg',
    'resources/images/darraghLive3.jpg', 'resources/images/darraghLive4.jpg',
    'resources/images/darraghLive7.jpg', 'resources/images/darraghLive6.jpg',
    'resources/images/darraghLive9.jpg', 'resources/images/darraghLive10.jpg',];
// Add a click event listener to the button
picSwitcher.addEventListener('click', function () {
    const randomImageIndex = Math.floor(Math.random() * imageArray.length);
    imageContainer.src = imageArray[randomImageIndex];
});
