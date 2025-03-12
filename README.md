# Music-Player
# Simple Music Player

This project is a simple music player built using HTML, CSS, and JavaScript. It allows users to play, pause, and navigate through a list of audio tracks. The player features a clean interface and basic controls for an enjoyable listening experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [JavaScript Functionality](#javascript-functionality)
- [CSS Styling](#css-styling)
- [Customization](#customization)
- [Contact](#contact)

## Features

- Play, pause, previous, and next track functionality.
- Displays the current track title.
- Simple and user-friendly interface.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/DellahM/Simple-Music-Player.git

Usage
Click the Play button to start playing the current track.
Click the Pause button to pause the track.
Use the Prev and Next buttons to navigate through the list of tracks.
The title of the currently playing track will be displayed above the controls.
JavaScript Functionality
The music player's functionality is implemented in JavaScript. Here’s a brief overview of how it works:

Key Functions
loadTrack(index): Loads the track at the specified index and updates the track title.
playTrack(): Plays the currently loaded track.
pauseTrack(): Pauses the currently playing track.
nextTrack(): Advances to the next track in the list and plays it.
prevTrack(): Goes back to the previous track in the list and plays it.
Example JavaScript Code
Here’s a snippet of the JavaScript code that handles the music player's functionality:


const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const trackTitle = document.getElementById('track-title');

const tracks = [
    { title: "Nikita Kering - Crossing Lines", src: "y2mate.com - Nikita Kering - Crossing Lines Official Music Video.mp3" },
    { title: "Nikita Kering - Ex", src: "y2mate.com - Nikita Kering - Ex Official Music Video.mp3" },
    { title: "Nikita Kering - On Yah Intro", src: "y2mate.com - Nikita Kering - On Yah Intro.mp3" },
    { title: "Nikita Kering - Save Me", src: "y2mate.com - Nikita Kering - Save Me Visualizer.mp3" }
];

let currentTrackIndex = 0;

function loadTrack(index) {
    audio.src = tracks[index].src;
    trackTitle.textContent = tracks[index].title;
}

// Event listeners for buttons
playButton.addEventListener('click', playTrack);
pauseButton.addEventListener('click', pauseTrack);
nextButton.addEventListener('click', nextTrack);
prevButton.addEventListener('click', prevTrack);

// Load the first track
loadTrack(currentTrackIndex);






Key CSS Classes
Body: Centers the player in the viewport with a gradient background.
Player: Styles the player container with padding, background gradient, and rounded corners.
Controls: Styles the


- **Controls**: Styles the control buttons with margins and hover effects for better user interaction.

## Customization

You can customize the music player's appearance and functionality by modifying the CSS and JavaScript files. Here are some suggestions:

- **Change Track List**: Update the `tracks` array in the JavaScript file to include your own audio files and titles.
- **Modify Styles**: Adjust the CSS properties in `style.css` to change the colors, fonts, and layout of the player.
- **Add More Features**: Consider adding features such as a volume control, a progress bar, or a playlist feature to enhance the music player.

### Example of Adding a New Track

To add a new track to the player, simply append a new object to the `tracks` array in the `script.js` file:

```javascript
const tracks = [
    { title: "Nikita Kering - Crossing Lines", src: "y2mate.com - Nikita Kering - Crossing Lines Official Music Video.mp3" },
    { title: "Nikita Kering - Ex", src: "y2mate.com - Nikita Kering - Ex Official Music Video.mp3" },
    { title: "Nikita Kering - On Yah Intro", src: "y2mate.com - Nikita Kering - On Yah Intro.mp3" },
    { title: "Nikita Kering - Save Me", src: "y2mate.com - Nikita Kering - Save Me Visualizer.mp3" },
    { title: "New Track Title", src: "path/to/new-track.mp3" } // Add your new track here
];



Contact
For any inquiries or feedback, feel free to reach out:

Email: dellahmiheso@gmail.com
GitHub: DellahM



   
