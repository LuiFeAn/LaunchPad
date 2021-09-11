
//Events
document.body.addEventListener("keyup",(e)=>{
    playsound(e.code.toLowerCase());
})

document.querySelector(".composer button").addEventListener('click',()=>{
    let song = document.querySelector("input").value;
    
    if(song !==''){
        let songArray = song.split('');
        PlayComposition(songArray);
    }
});

//Functions
const playsound = (sound)=>{
    let audioElement = document.querySelector(`#s_${sound}`);
    if(audioElement){
        audioElement.play();
        audioElement.currentTime = 0;
    }

    let timer = setTimeout(totalTime, 200)

    const totalTime = ()=> launchElement.classList.remove("launch-active");

    //GetElement
    let launchElement = document.querySelector(`div[data-key="${sound}"]`)
}

const PlayComposition = (songArray)=>{
    let wait = 0;
    for(let songItem of songArray){
        setTimeout(()=>{
            playsound(`key${songItem}`);
        }, wait)
        wait+=990;
    }
} 

//Conditions
if(launchElement){
    launchElement.classList.add("launch-active");
}