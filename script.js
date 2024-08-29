console.log("welcome to jukEboX");

//initialising variables
let songIndex=0;
let audioElement=new Audio();
audioElement.src="files/messAudio.mp3";
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById("gif");
let cat=document.getElementById("cat");
let changeBg=document.body;
let songItem=Array.from(document.getElementsByClassName("songItem"));
let playButtons=Array.from(document.getElementsByClassName('icons2'));
let previous=document.getElementById('previous');
let next=document.getElementById('next');
let bottomSongName=document.getElementById('bottomSongName');


let songs=[
  {songName:"Mess", filePath:"files/messAudio.mp3", coverPath:"files/messCoverimg.jpg"},
  {songName:"Knees",   filePath:"files/kneesAudio.mp3", coverPath:"files/kneesCover.jpg"},
  {songName:"Home To Mama Reprise",   filePath:"files/homeToMamaReprise.mp3", coverPath:"files/homeToMamaCover.jpg"},
  {songName:"Home To Mama",   filePath:"files/homeToMama.mp3", coverPath:"files/homeToMamaCover.jpg"},
  {songName:"Tere Layi", filePath:"files/tereLayi.mp3", coverPath:"files/tereLayiCoverImage.jpg"},
]
 // bottomSongName.innerText=songs[0].songName;

songItem.forEach((element,i)=>{
  console.log(element,i);
  element.getElementsByTagName('img')[0].src=songs[i].coverPath;
  element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
})


// audioElement.play();

masterPlay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.setAttribute('src','files/pause.png');
    gif.style.opacity=1;
    cat.style.opacity=1;
    changeBg.style.backgroundImage='url("files/bg2.gif")'
  }
  else{
    audioElement.pause();
    masterPlay.setAttribute('src','files/playButton.png');
    gif.style.opacity=0;
    cat.style.opacity=0;
    changeBg.style.backgroundImage='url("files/background_image.jpg")'
  }
});

 audioElement.addEventListener('timeupdate',()=>{
  console.log('timeupdate');
  let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
  myProgressBar.value=progress;
  // console.log(myProgressBar.value);
});

myProgressBar.addEventListener('change',()=>{
  // audioElement.currentTime=(myProgressBar.value/100) * audioElement.duration;
  let progressValue=myProgressBar.value * audioElement.duration/100;
  console.log(myProgressBar.value);
  console.log(audioElement.currentTime);
  audioElement.currentTime=progressValue
  console.log(audioElement.currentTime);
  
});
bottomSongName.innerHtml="hello void"
playButtons.forEach((element)=>{
  element.addEventListener('click',(e)=>{
    audioElement.currentTime=0;
    // console.log(e.target.id);
    songIndex=parseInt(e.target.id);
    if(songIndex===1){
      bottomSongName.innerText=songs[0].songName;
      audioElement.src=songs[0].filePath;
    }
    else if(songIndex===2){
      bottomSongName.innerText=songs[1].songName;
      audioElement.src=songs[1].filePath;
    }
    else if(songIndex===3){
      bottomSongName.innerText=songs[2].songName;
      audioElement.src=songs[2].filePath;
    }
    else if(songIndex===4){
      bottomSongName.innerText=songs[3].songName;
      audioElement.src=songs[3].filePath;
    }
    else if(songIndex===5){
      bottomSongName.innerText=songs[4].songName;
      audioElement.src=songs[4].filePath;
    }
    audioElement.play();
  });
});

previous.addEventListener('click',()=>{
  if(songIndex===1){
    // audioElement.src=songs[3].filePath;
    songIndex=4;
  }
  else{
    songIndex -=1;
  }
  if(songIndex===1){
      bottomSongName.innerText=songs[0].songName;
    audioElement.src=songs[0].filePath;
  }
  else if(songIndex===2){
      bottomSongName.innerText=songs[1].songName;
    audioElement.src=songs[1].filePath;
  }
  else if(songIndex===3){
      bottomSongName.innerText=songs[2].songName;
    audioElement.src=songs[2].filePath;
  }
  else if(songIndex===4){
      bottomSongName.innerText=songs[3].songName;
    audioElement.src=songs[3].filePath;
  }
  audioElement.play();
  
});
next.addEventListener('click',()=>{
  if(songIndex===4){
    // audioElement.src=songs[3].filePath;
    songIndex=1;
  }
  else{
    songIndex +=1;
  }
  if(songIndex===1){
      bottomSongName.innerText=songs[0].songName;
    audioElement.src=songs[0].filePath;
  }
  else if(songIndex===2){
      bottomSongName.innerText=songs[1].songName;
    audioElement.src=songs[1].filePath;
  }
  else if(songIndex===3){
      bottomSongName.innerText=songs[2].songName;
    audioElement.src=songs[2].filePath;
  }
  else if(songIndex===4){
      bottomSongName.innerText=songs[3].songName;
    audioElement.src=songs[3].filePath;
  }
  audioElement.play();
  
});