const wrapperBackground = document.querySelector(".wrapper"),
    trackImage = document.querySelector('.track-image'),
    buttonPause = document.querySelector('.button-pause'),
    buttonPlay = document.querySelector('.button-play'),
    currentTrack = document.querySelector(".current"),
    artistName = document.querySelector(".artist"),
    trackTitle = document.querySelector(".track")
    track = document.querySelector("audio"),
    progressBarContainer = document.querySelector(".progress-bar"),
    progress = document.querySelector(".progress"),
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

// play and pause tracks

function playCurrentTrack(artist, title, audio, cover) {
    artistName.innerHTML = artist;
    trackTitle.innerHTML = title;
        
    track.src = `./assets/audio/${audio}.mp3`;
    trackImage.style = `background: url(./assets/img/${cover}.jpg) 50% / cover no-repeat;`;
    wrapperBackground.style = `background: url(./assets/img/${cover}.jpg) 50% / cover no-repeat;`;
}

playCurrentTrack(artistArr[artistIndex], tracksArr[currentTrackIndex], audioTitle[audioTitleIndex], trackImages[coverIndex], wrapperBackground[coverIndex])

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
    playCurrentTrack(artistArr[artistIndex], tracksArr[currentTrackIndex], audioTitle[audioTitleIndex], trackImages[coverIndex], wrapperBackground[coverIndex])
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
    playCurrentTrack(artistArr[artistIndex], tracksArr[currentTrackIndex], audioTitle[audioTitleIndex], trackImages[coverIndex])
    playTrack ();
}

buttonPrevious.addEventListener('click', switchTrackPrevious)

// progress bar functionality

track.addEventListener("timeupdate", (event) => {
    const {duration, currentTime} = event.srcElement;
    const progressBarTime = (currentTime / duration) * 100;
    progress.style.width = `${progressBarTime}%`; 

    let trackCurrentTime = document.querySelector(".track-duration-progress");
    let trackDuration = document.querySelector(".track-duration");
    track.addEventListener("loadeddata", () => {
        
        // total track time
        let totalDuration = track.duration;
        let minutes = Math.floor(totalDuration / 60);
        let seconds = Math.floor(totalDuration % 60);
    
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }
        trackDuration.innerText = `${minutes}:${seconds}`;
    })
        
    // current track time
    let currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    
    if (currentSeconds < 10) {
        currentSeconds = `0${currentSeconds}`;
    }
    trackCurrentTime.innerText = `${currentMinutes}:${currentSeconds}`

    console.log(currentTime)
});

// setTimeout(function(){console.log(track.currentTime)},200);

console.log(`https://rolling-scopes-school.github.io/mireille0000-JSFEPRESCHOOL2023Q2/Audio-player/`);