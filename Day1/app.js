document.addEventListener('DOMContentLoaded', function(){
    function playAudio (keyCode){
         
        const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

        const key = document.querySelector(`.drum-key[data-key="${keyCode}"]`);

        if(audio){
            audio.currentTime = 0;
            audio.play();
            key.classList.add("playing");
        }
        console.log(audio)
    }
    
    function handleKeyDown(e){
        console.log(e)
        playAudio(e.keyCode)
    }

    function removeTransition (e) {
        console.log(e)
         if(e.propertyName !== 'transform') return;
         this.classList.remove('playing')
         console.log(this)
    }
    const keys = document.querySelectorAll('.drum-key')
    keys.forEach(key =>{key.addEventListener('transitionend',removeTransition)});
    
    window.addEventListener('keydown', handleKeyDown)
})
