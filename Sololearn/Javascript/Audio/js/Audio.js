
  var audio, audio_src, alt_audio_link,
      btn_play, btn_stop, btn_pause, seekbar_progress, statePercentage, currentTime
      , totalTime, body, current, duration, cover, cover_src, coverlist,play_window, flip_cover, flip_card__back, images ;

flip_card__back = document.querySelector('.flip-card__back')
//
clone_window = flip_card__back.cloneNode(true);

// console.log('clone_window: ',clone_window);
flip_cover = document.querySelector('.flip-cover')
play_window = document.querySelector('.play-window');
body = document.body;
coverlist = document.querySelector('.coverlist')
current = document.querySelector('.current-time');
duration = document.querySelector('.duration-time');
//오디오 객체 생성/속성 설정
audio = document.createElement('audio');
// audio_src = "media/source/002.TheChainsmokers&Halsey-Closer.mp3";
// audio.setAttribute('src', audio_src);

alt_audio_link = document.createElement('a');
alt_audio_link.setAttribute('href', audio_src);
alt_audio_link.innerHTML = 'TheChainsmokers&Halsey-Closer';

cover = document.createElement('img');
// cover_src = "media/cover/002.TheChainsmokers&Halsey-Closer.jpg";
// cover.setAttribute('src', cover_src);
coverlist.appendChild(cover);

audio.appendChild(alt_audio_link);

function playMusic( audio ){
  audio.play();
}
function stopMusic( audio ){
  audio.pause();
  audio.currentTime = 0 ;
}
function pauseMusic ( audio ) {
  audio.pause();
}

btn_play = document.querySelector('.music-play');
btn_stop = document.querySelector('.music-stop');
btn_pause= document.querySelector('.music-pause');

btn_play.onclick = function (){
  playMusic( audio );
  }

btn_stop.onclick = function (){
  stopMusic( audio );
  }

btn_pause.onclick = function (){
  pauseMusic( audio );
  }

// 변하는 시간의 퍼센트를 seekbar_progress의 퍼센트로 대입

seekbar_progress = document.querySelector('.seekbar-progress')

statePercentage = (function () {

var total = 0;

  return function(audio){
    if ( ! total  ) {
      total = audio.duration;
    }
    return Math.floor( audio.currentTime / total * 100) + '%';
  }
})();

//현재의 진행시간을 나타내는 함수이다.
//일반함수는 한번호출시 재호출 할 수 없지만
//자가실행함수는 재사용 가능하다.
currentTime = ( function () {

var current = 0;

  return function (audio) {

    current = audio.currentTime;

 return  current;}
})();

totalTime = (function () {

  var total = 0;

  return function ( audio ) {
    total = audio.duration;

    return total;
  }
}) ();

//시간 변형함수
function timetransform (second) {
    var min, sec;
    second = Math.floor( second );
    min = Math.floor(second / 60);
    min = min >= 10 ? min : '0'+min;
    sec = Math.floor(second % 60);
    sec = sec >= 10 ? sec : '0'+sec;
    return min+':'+sec;
}
// ontimeupdate를 사용하여 노래의 진행 퍼센트를 노래 진행 길이에 대입함.
audio.ontimeupdate = function () {
seekbar_progress.style.width = statePercentage(audio);
// console.log(seekbar_progress.style.width);
var updata_time = timetransform(this.currentTime);
current.innerHTML = updata_time;

var duration_time = timetransform(this.duration);
duration.innerHTML = duration_time;
}

//모델 생성자함수 만들기
var Model = (function(global) {
  'use strict';

  var data_list;
  function _Model(data) {
    if ( data && !Array.isArray(data) ) {
      throw new Error('초기 데이터 유형은 배열만 가능합니다.');
    }
    data_list = data || [];
  }
  return _Model
})(window);
