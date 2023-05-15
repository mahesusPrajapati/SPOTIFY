let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");

let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));
// let songItemPlay = document.getElementsByClassName('songItemPlay');
let songcontainer = document.getElementsByClassName("songcontainer");
let container = document.getElementsByClassName("container")[0];
// container.style.backgroundImage = 'url(./logo.png)';



console.log(container);
let songs = [
  {
    songName: "Warriyo [NCS Release]",
    filePath: "./songs/1.mp3",
    coverPath: "./covers/1.jpg",
    songImg: "./songimg/1.jfif",
  },
  {
    songName: "Cielo",
    filePath: "songs/2.mp3",
    coverPath: "./covers/2.jpg",
    songImg: "./songimg/2.jfif",
  },

  {
    songName: "DEAF KEV [NCS Release]-320k",
    filePath: "./songs/3.mp3",
    coverPath: "./covers/3.jpg",
    songImg: "./songimg/3.jfif",
  },
  {
    songName: "Different Heaven & EH!DE[NCS Release]",
    filePath: "./songs/4.mp3",
    coverPath: "./covers/4.jpg",
    songImg: "./songimg/4.jfif",
  },
  {
    songName: "Janji-Heroes-Tonight",
    filePath: "./songs/5.mp3",
    coverPath: "./covers/5.jpg",
    songImg: "./songimg/5.jfif",
  },
  {
    songName: "Rabba - Salam-e-Ishq",
    filePath: "./songs/2.mp3",
    coverPath: "./covers/6.jpg",
    songImg: "./songimg/6.jfif",
  },
  {
    songName: "Sakhiyaan - Salam-e-Ishq",
    filePath: "./songs/6.mp3",
    coverPath: "./covers/7.jpg",
    songImg: "./songimg/7.jfif",
  },
  {
    songName: "Bhula Dena - Salam-e-Ishq",
    filePath: "./songs/7.mp3",
    coverPath: "./covers/8.jpg",
    songImg: "./songimg/8.jfif",
  },
  {
    songName: "Tumhari Kasam - Salam-e-Ishq",
    filePath: "./songs/8.mp3",
    coverPath: "./covers/9.jpg",
    songImg: "./songimg/9.jfif",
  },
  {
    songName: "Na Jaana - Salam-e-Ishq",
    filePath: "./songs/9.mp3",
    coverPath: "./covers/10.jpg",
    songImg: "./songimg/10.jfif",
  },
];

playSongbyID = (i) => {
  console.log(i);
  let tempobject = songs[i];
  audioElement.src = tempobject.filePath;
  audioElement.currentTime = 0;

  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
};

songs.forEach((e, i) => {
  songcontainer[0].insertAdjacentHTML(
    "beforeend",
    `<div class='songItem'><img src=${e.coverPath} alt=''/><span class='songName'>${e.songName}</span><span class='songlistplay'><span class='timestamp'>05:34</span><i id='2' class='songItemPlay fa-solid fa-1x fa-play' onClick='playSongbyID(${i})'></i></span></div>`
  );
});



songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
    gif.style.opacity = 0;
  }
});
// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause");

      element.classList.add("fa-play");
      // console.log(document.getElementsByClassName("fa-play"));
      // if (currentPlay && element.classList.contains("fa-play")) {
    }
    // if (currentPause && element.classList.contains("fa-pause")) {
    //     element.classList.remove("fa-play");
    // }
    // }
  );
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      // console.log(e.target);
      // makeAllPlays()

      // makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play");
      e.target.classList.add("fa-pause");
      masterSongName.innerText = songs[songIndex].songName;
      container.style.backgroundImage = 'url(songs[songIndex].songImage)';
      // audioElement.src = `./songs/${songIndex + 1}.mp3`;
      // audioElement.currentTime = 0;
      gif.style.opacity = 1;
      // audioElement.play();
      masterPlay.classList.remove("fa-play");
      masterPlay.classList.add("fa-pause");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  let songphoto = songs[songIndex].songImage;
  //   audioElement.src = `./songs/${songIndex + 1}.mp3`;
  //   audioElement.currentTime = 0;
  masterSongName.innerText = songs[songIndex].songName;
  container.style.backgroundImage = "url(songphoto)";
  //   audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  
  //   audioElement.src = `./songs/${songIndex + 1}.mp3`;
  //   audioElement.currentTime = 0;
  masterSongName.innerText = songs[songIndex].songName;
  
  //   audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
});
