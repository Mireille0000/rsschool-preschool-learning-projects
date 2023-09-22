const trackImage = document.querySelector('.tarck-image'),
    buttonPause = document.querySelector('.button-pause'),
    buttonPlay = document.querySelector('.button-play'),
    currentTrack = document.querySelector(".current"),
    artistName = document.querySelector(".artist"),
    trackTitle = document.querySelector(".track")
    track = document.querySelector("audio"),
    buttonPrevious = document.querySelector(".button-prev"),
    buttonNext = document.querySelector(".button-next");

    // const currentTrackTitle = ["Kokia\n Fukurou", "Eels\n Lone Wolf"];
    const artistArr = ["Kokia", "Eels"];
    const tracksArr = ["Fukurou", "Lone Wolf"]
    const audioTitle = ["kokia", "eels"];

    let audioTitleIndex = 0;
    let currentTrackIndex = 0;
    let artistIndex = 0;

    function playCurrentTracke(artist, title, audio) {
        artistName.innerHTML = artist;
        trackTitle.innerHTML = title;
        
        track.src = `./assets/audio/${audio}.mp3`;
    }

    playCurrentTracke(artistArr[artistIndex], tracksArr[currentTrackIndex], audioTitle[audioTitleIndex])

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

        if (currentTrackIndex > tracksArr.length -1) {
            currentTrackIndex = 0;
            artistIndex = 0;
            audioTitleIndex = 0;
        }

        buttonPlay.classList.add('button-play_active');
        buttonPause.classList.add('button-pause_active');
        playCurrentTracke(artistArr[artistIndex], tracksArr[currentTrackIndex], audioTitle[audioTitleIndex])
        playTrack ();
    }

    buttonNext.addEventListener('click', switchTrackNext)

    function switchTrackPrevious() {
        currentTrackIndex--;
        artistIndex--;
        audioTitleIndex--;

        if (currentTrackIndex < 0) {
            currentTrackIndex = tracksArr.length - 1;
            artistIndex = artistArr.length - 1;
            audioTitleIndex = audioTitle.length - 1;
        }

        buttonPlay.classList.add('button-play_active');
        buttonPause.classList.add('button-pause_active');
        playCurrentTracke(artistArr[artistIndex], tracksArr[currentTrackIndex], audioTitle[audioTitleIndex])
        playTrack ();
    }

    buttonPrevious.addEventListener('click', switchTrackPrevious)

    console.log(`https://rolling-scopes-school.github.io/mireille0000-JSFEPRESCHOOL2023Q2/Audio-player/`);