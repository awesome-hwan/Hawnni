var data = [
  {
    "cover"  : "cover/001.EdSheeran-ShapeOfYou.jpg",
    "source" : "source/001.EdSheeran-ShapeOfYou.mp3",
    "clone_window" : clone_window
  },
  {
    "cover"  : "cover/002.TheChainsmokers&Halsey-Closer.jpg",
    "source" : "source/002.TheChainsmokers&Halsey-Closer.mp3",
    "clone_window" : clone_window
  },
  {
    "cover"  : "cover/003.Zayn&TaylorSwift-IDon'tWannaLiveForever(FiftyShadesDarker).jpg",
    "source" : "source/003.Zayn&TaylorSwift-IDon'tWannaLiveForever(FiftyShadesDarker).mp3",
    "clone_window" : clone_window
  },
  {
    "cover"  : "cover/004.KatyPerry&SkipMarley-ChainedToTheRhythm.jpg",
    "source" : "source/004.KatyPerry&SkipMarley-ChainedToTheRhythm.mp3",
    "clone_window" : clone_window

  },
  {
    "cover"  : "cover/005.Migos&LilUziVert-BadAndBoujee.jpg",
    "source" : "source/005.Migos&LilUziVert-BadAndBoujee.mp3",
    "clone_window" : clone_window
  },
  {
    "cover"  : "cover/006.TheChainsmokers-Paris.jpg",
    "source" : "source/006.TheChainsmokers-Paris.mp3",
    "clone_window" : clone_window
  },
  {
    "cover"  : "cover/007.Rihanna-LoveOnTheBrain.jpg",
    "source" : "source/007.Rihanna-LoveOnTheBrain.mp3",
    "clone_window" : clone_window
  },
  {
    "cover"  : "cover/008.BrunoMars-That'sWhatILike.jpg",
    "source" : "source/008.BrunoMars-That'sWhatILike.mp3",
    "clone_window" : clone_window
  },
  {
    "cover"  : "cover/009.BigSean-BounceBack.jpg",
    "source" : "source/009.BigSean-BounceBack.mp3",
    "clone_window" : clone_window
  },
  {
    "cover"  : "cover/010.MachineGunKelly&CamilaCabello-BadThings.jpg",
    "source" : "source/010.MachineGunKelly&CamilaCabello-BadThings.mp3",
    "clone_window" : clone_window
  }
];

var music_playlist = new Model(data);

// 사진 , 음원 배치를 위해 for문을 사용
// for (var i=0, l=data.length; i<l; i++){
  for( var i in data ) {
    if( hasOwnProperty){

var cover, alt, img, clone;
//data에 있는 cover을 cover라는 변수에 담는다.
//
cover = data[i].cover;
//접근성을 위해 alt설정은 필수!!
alt = cover.split('/')[1].replace('.jpg','');

img = document.createElement('img')
img.setAttribute('src', 'media/'+ cover);
img.setAttribute('alt', alt);


audio_src = data[i].source;
audio.setAttribute('src', 'media/'+ audio_src);

clone = data[i].clone_window;

coverlist.appendChild(img);
// play_window.appendChild(clone);
// clone한 음악 플레이 관련 버튼과, 싱크바를 커버하나당 하나씩 배치하자
// console.log(clone);
// console.log(audio);
  }
}
