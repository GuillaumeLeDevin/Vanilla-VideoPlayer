const video = document.querySelector('.video');
const btnPausePlay = document.getElementById('play-pause');
const img = document.querySelector('#play-pause img');
const orangeBar = document.querySelector('.orange-bar');
const progress = document.querySelector('.progress')
const muteBtn = document.getElementById('mute');
const fullScreen = document.getElementById('fullscreen');
const volumeSlider = document.getElementById('volume-slider');

btnPausePlay.addEventListener('click', togglePlayPause);
video.addEventListener('click', togglePlayPause);

function togglePlayPause(){
    if(video.paused){
        img.src = "ressources/pause.svg";
        video.play();
    }
    else {
        img.src = "ressources/play.svg";
        video.pause();
    }
}

// la barre orange

video.addEventListener('timeupdate', () => {
   
        let progressBar = video.currentTime / video.duration;

        progress.style.width = progressBar * 100 + "%";

    if(video.ended){
        img.src = "ressources/play.svg";
    }

})

// Barre cliquable

let rect = orangeBar.getBoundingClientRect();
let width = rect.width;

orangeBar.addEventListener('click', (e) => {

    let x = e.clientX - rect.left;

    let widthPercent = x * 100 / width;

    let durationVideo = video.duration;

    // position in seconds calculated by the percentage
    video.currentTime = durationVideo * (widthPercent / 100);

})

// Screen

window.addEventListener('resize', () => {

    let rect = orangeBar.getBoundingClientRect();
    let width = rect.width;

})

video.addEventListener('dblclick', () => {
    video.requestFullscreen();
})

fullScreen.addEventListener('click', () => {
    video.requestFullscreen();
})

// Volume

volumeSlider.addEventListener('change',() => {

    video.volume = volumeSlider.value / 100;

})

// Mute
muteBtn.addEventListener('click', () => {

    if(video.muted){
        video.muted = false;
        muteBtn.innerText = 'Mute';
    }
    else {
        video.muted = true;
        muteBtn.innerText = 'Unmute';
    }

})