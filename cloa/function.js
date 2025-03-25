// Get the buttons and audio elements
const aboutLink = document.getElementById('about');
const playLink = document.getElementById('play');
const homeLink = document.getElementById('home');
const sound = document.getElementById('sound');

// Function to handle sound and redirection
function playSoundAndRedirect(link) {
    // Play the sound
    sound.play();
    
    // After the sound finishes, navigate to the link
    sound.onended = function() {
        window.location.href = link.href ? link.href : link;
    };
}

// Add event listeners to both buttons
aboutLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior temporarily
    playSoundAndRedirect(aboutLink);
});

playLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior temporarily
    playSoundAndRedirect('play.html'); // Replace 'play.html' with the actual destination of the Play link
});





document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('backgroundMusic');

    // Attempt to play audio after a user interaction
    function enableAudio() {
        audio.play().then(() => {
            console.log("Audio is playing.");
        }).catch(error => {
            console.warn("Autoplay blocked. User interaction required.");
        });

        // Remove event listener after first interaction
        document.removeEventListener('click', enableAudio);
    }

    // Check if autoplay works, if not, wait for user interaction
    audio.play().catch(() => {
        document.addEventListener('click', enableAudio);
    });
});