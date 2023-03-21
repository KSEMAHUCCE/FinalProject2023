var video = document.querySelector('video');
var videoContainer = document.querySelector('#video-container');
var desktopSource = 'videos/wormhole-6797vig2.mp4';
var tabletSource = 'videos/wormhole-6797vig2square.mp4';
var phoneSource = 'videos/wormhole-6797vig2phone.mp4';


function setVideoSource() {
  if (window.matchMedia("(min-width: 769px)").matches) {
    video.setAttribute('src', desktopSource);
  } else if (window.matchMedia("(min-width: 481px) and (max-width: 768px)").matches) {
    video.setAttribute('src', tabletSource);
  } else {
    video.setAttribute('src', phoneSource);
  }
}


function removeVideo() {
    video.remove();
    navMenu.classList.remove('hidden');
  }

setVideoSource();
window.addEventListener('resize', setVideoSource);

const navMenu = document.querySelector('#nav-menu');

video.addEventListener('ended', removeVideo);

video.addEventListener('ended', () => {
  navMenu.classList.remove('hidden');
});

video.addEventListener('click',function() {
  video.currentTime = video.duration - 0.8; /*Length of Video Minus Time*/
});