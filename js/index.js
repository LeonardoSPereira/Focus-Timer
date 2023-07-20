import { 
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonAdd,
    buttonLess,
    buttonFlorest,
    buttonRain,
    buttonCafe,
    buttonFire
} from "./elements.js";

import { Controls } from "./controls.js";
const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonCafe,
    buttonFire,
    buttonFlorest,
    buttonRain,

});

import Sounds from "./sounds.js"
const sound = Sounds();

import { Timer } from "./timer.js"
const timer = Timer();

buttonPlay.addEventListener('click', function() {
    controls.play();
    timer.countdown();    
})

buttonPause.addEventListener('click', function() {
    controls.pause();
    timer.pause();
})

buttonStop.addEventListener('click', function(){
    timer.reset();
})

buttonAdd.addEventListener('click', function() {
    timer.add();
})

buttonLess.addEventListener('click', function() {
    timer.less();
})

buttonFlorest.addEventListener('click', function() {
    if(!buttonFlorest.classList.contains('active')){
        controls.audioFlorest();
        sound.florestAudio.play();
        sound.rainAudio.pause();
        sound.cafeAudio.pause();
        sound.fireAudio.pause();
    } else {
        sound.florestAudio.pause();
        buttonFlorest.classList.remove('active');
    }

})

buttonRain.addEventListener('click', function() {
    if(!buttonRain.classList.contains('active')){
        controls.audioRain();
        sound.rainAudio.play();
        sound.florestAudio.pause();
        sound.cafeAudio.pause();
        sound.fireAudio.pause();
    } else {
        sound.rainAudio.pause();
        buttonRain.classList.remove('active');
    }

})

buttonCafe.addEventListener('click', function() {
    if(!buttonCafe.classList.contains('active')){
        controls.audioCafe();
        sound.cafeAudio.play();
        sound.florestAudio.pause();
        sound.rainAudio.pause();
        sound.fireAudio.pause();
    } else {
        sound.cafeAudio.pause();
        buttonCafe.classList.remove('active');
    }
})

buttonFire.addEventListener('click', function() {
    if(!buttonFire.classList.contains('active')){
        controls.audioFire();
        sound.fireAudio.play();
        sound.florestAudio.pause();
        sound.rainAudio.pause();
        sound.cafeAudio.pause();
    } else {
        sound.fireAudio.pause();
        buttonFire.classList.remove('active');
    }
})