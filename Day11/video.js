// BUILD THE ELEMENT
const player = document.querySelector('.player');
const progress = player.querySelector('.progress');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const btns = player.querySelector('[data-skip]');
const ranges = player.querySelectorAll('.player-slider');
const skipButton = player.querySelectorAll('[data-skip]');
const progressBar = player.querySelector('.progress-filled');

// BUILD ON THE FUNCTIONS
function togglePlay(){
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    console.log('click')
    
}

function updatedButton(){
    const icon = video.paused ? '▶' : '⏸';
    console.log(icon);
    toggle.textContent = icon;
}
 
function skip(){
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);

}
function handleRangeUpdate(){
    video[this.name] = this.value
}
function handleProgress(){
 const percent = (video.currentTime / video.duration) *100;
 progressBar.style.flexBasis = `${percent}%`;
}
function scrub(e){
    const scrunTimer = (e.offsetX /progress.offsetWidth) * video.duration;
    video.currentTime = scrunTimer;
}
// BUILD ON EVENT LISTENER
video.addEventListener('click',togglePlay);
video.addEventListener('play', updatedButton);
video.addEventListener('pause',updatedButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
skipButton.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e)=> mousedown && scrub(e));
progress.addEventListener('mousedown',()=> mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
