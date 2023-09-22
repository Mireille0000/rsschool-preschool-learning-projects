const trackImage = document.querySelector('.tarck-image'),
    buttonPause = document.querySelector('.button-pause'),
    buttonPlay = document.querySelector('.button-play'),
    currentTrack = document.querySelector(".current"), // change so that the two lines change
    artist = document.querySelector(".artist"),
    track = document.querySelector(".track")
    buttonPrevious = document.querySelector(".button-prev"),
    buttonNext = document.querySelector(".button-next");

    const tracksArtist = ["Kokia", "Eels"];
    const tracks = ["Fukurou", "Lone Wolf"];

    let artistIndex = 0;
    let trackIndex = 0;

    function showCurrentTrackeTitle(tracksArtist, tracks) {
        artist.innerHTML = tracksArtist;
        track.innerHTML = tracks;    
    }

    showCurrentTrackeTitle(tracksArtist[artistIndex], tracks[trackIndex]);