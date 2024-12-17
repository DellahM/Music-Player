const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const trackTitle = document.getElementById('track-title');

const tracks = [
    { title: "Nikita Kering  Crossing Lines ", src: "y2mate.com - Nikita Kering  Crossing Lines Official Music Video.mp3 "},
    { title: " Nikita Kering  Ex ", src: " y2mate.com - Nikita Kering  Ex Official Music Video.mp3" },
    { title: "Nikita Kering  On Yah Intro ", src: "y2mate.com - Nikita Kering  On Yah Intro.mp3 " },
    {title: "Nikita Kering  Save Me ", src:"y2mate.com - Nikita Kering  Save Me Visualizer.mp3"}]



let currentTrackIndex = 0;

function loadTrack(index) {
    audio.src = tracks[index].src;
    trackTitle.textContent = tracks[index].title;
}

function playTrack() {
    audio.play();
}

function pauseTrack() {
    audio.pause();
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
}

// Event listeners
playButton.addEventListener('click', playTrack);
pauseButton.addEventListener('click', pauseTrack);
nextButton.addEventListener('click', nextTrack);
prevButton.addEventListener('click', prevTrack);

// Load the first track
loadTrack(currentTrackIndex);