const wrapperBackground = document.querySelector(".wrapper"),
    trackImage = document.querySelector('.track-image'),
    buttonPause = document.querySelector('.button-pause'),
    buttonPlay = document.querySelector('.button-play'),
    currentTrack = document.querySelector(".current"),
    artistName = document.querySelector(".artist"),
    trackTitle = document.querySelector(".track")
    track = document.querySelector("audio"),
    buttonPrevious = document.querySelector(".button-prev"),
    buttonNext = document.querySelector(".button-next");

const artistArr = ["Kokia", "Eels"];
const tracksArr = ["Fukurou", "Lone Wolf"]
const audioTitle = ["kokia", "eels"];
const trackImages = ["fukurou", "lone_wolf"];

let artistIndex = 0;
let currentTrackIndex = 0;
let audioTitleIndex = 0;
let coverIndex = 0;

function playCurrentTracke(artist, title, audio, cover) {
    artistName.innerHTML = artist;
    trackTitle.innerHTML = title;
        
    track.src = `./assets/audio/${audio}.mp3`;
    trackImage.style = `background: url(./assets/img/${cover}.jpg) 50% / cover no-repeat;`;
    wrapperBackground.style = `background: url(./assets/img/${cover}.jpg) 50% / cover no-repeat;`;
}

playCurrentTracke(artistArr[artistIndex], tracksArr[currentTrackIndex], audioTitle[audioTitleIndex], trackImages[coverIndex], wrapperBackground[coverIndex])

function playTrack () {
    track.play();
}

function pauseTrack () {
    track.pause();
}

buttonPlay.addEventListener('click', () => {
    buttonPlay.classList.add('button-play_active');
    buttonPause.classList.add('button-pause_active');
    playTrack ();
})

buttonPause.addEventListener('click', () => {
    buttonPlay.classList.remove('button-play_active');
    buttonPause.classList.remove('button-pause_active');
    pauseTrack ()
})

// switch track

function switchTrackNext() {
    currentTrackIndex++;
    artistIndex++;
    audioTitleIndex++;
    coverIndex++;

    if (currentTrackIndex > tracksArr.length -1) {
        currentTrackIndex = 0;
        artistIndex = 0;
        audioTitleIndex = 0;
        coverIndex = 0;
    }

    buttonPlay.classList.add('button-play_active');
    buttonPause.classList.add('button-pause_active');
    playCurrentTracke(artistArr[artistIndex], tracksArr[currentTrackIndex], audioTitle[audioTitleIndex], trackImages[coverIndex], wrapperBackground[coverIndex])
    playTrack ();
}

buttonNext.addEventListener('click', switchTrackNext)

function switchTrackPrevious() {
    currentTrackIndex--;
    artistIndex--;
    audioTitleIndex--;
    coverIndex--;

    if (currentTrackIndex < 0) {
        currentTrackIndex = tracksArr.length - 1;
        artistIndex = artistArr.length - 1;
        audioTitleIndex = audioTitle.length - 1;
        coverIndex = trackImages.length - 1;
    }

    buttonPlay.classList.add('button-play_active');
    buttonPause.classList.add('button-pause_active');
    playCurrentTracke(artistArr[artistIndex], tracksArr[currentTrackIndex], audioTitle[audioTitleIndex], trackImages[coverIndex])
    playTrack ();
}

buttonPrevious.addEventListener('click', switchTrackPrevious)

console.log(`https://rolling-scopes-school.github.io/mireille0000-JSFEPRESCHOOL2023Q2/Audio-player/`);