const sounds = {
  w: { sound: 'sounds/kick-bass.mp3', image: 'images/kick.png', name: 'Kick' },
  a: { sound: 'sounds/snare.mp3', image: 'images/snare.png', name: 'Snare' },
  s: { sound: 'sounds/tom-1.mp3', image: 'images/tom1.png', name: 'Tom 1' },
  d: { sound: 'sounds/tom-2.mp3', image: 'images/tom2.png', name: 'Tom 2' },
  j: { sound: 'sounds/tom-3.mp3', image: 'images/tom3.png', name: 'Tom 3' },
  k: { sound: 'sounds/tom-4.mp3', image: 'images/tom4.png', name: 'Tom 4' },
  l: { sound: 'sounds/crash.mp3', image: 'images/crash.png', name: 'Crash' },
};
 
// Function to play the corresponding sound
function playSound(key) {
  // Play the drum sound
  const audio = new Audio(sounds[key].sound);
  audio.play().catch(err => console.log("Error playing sound:", err)); // Error handling
}

// Function to set background image for the buttons
function setButtonProperties(button, key) {
  // Make sure image and sound exist in the map
  if (sounds[key]) {
    button.style.backgroundImage = `url(${sounds[key].image})`; // Set background image
    button.innerHTML = `<span class="letter">${key}</span>`; // Set letter text
    button.classList.add(key); // Add the key class for additional styles (e.g., CSS class for each key)
  }
}

// Function to handle button clicks and key presses
function handleClickOrKeyPress(event) {
  const key = event.key ? event.key.toLowerCase() : event.target.id;
  
  // Check if the key exists in the sounds object
  if (sounds[key]) {
    playSound(key); // Play the sound
    const button = document.getElementById(key);
    button.classList.add('pressed'); // Add pressed effect
    setTimeout(() => button.classList.remove('pressed'), 100); // Remove pressed effect after 100ms
  }
}

// Attach event listeners to each button
const drumButtons = document.querySelectorAll('.drum');
drumButtons.forEach(button => {
  const key = button.id;
  
  // Set button properties (image and letter) based on the `id`
  setButtonProperties(button, key);
  
  // Add event listener for button clicks
  button.addEventListener('click', handleClickOrKeyPress);
});

// Add event listener for keydown events (keyboard presses)
document.addEventListener('keydown', handleClickOrKeyPress);
