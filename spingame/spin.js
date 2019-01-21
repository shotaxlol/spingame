var rotatewheel =　spin.object ('wheel') .rotate() ;
var totalscore = spin.variable('total') ;
var speed = 10; 
var divide = 5;
var timeout = 2000; 
var stopAngle = Math.round(Math.random() * 360 + 0.5);
var angle = stopAngle;
var section = 360 / 60 ;
// score
var score1 = spin.object('score1').text();
var score2 = spin.object('score2').text();
var score3 = spin.object('score3').text();
var score4 = spin.object('score4').text();
var score5 = spin.object('score5').text();
var score6 = spin.object('score6').text();

for (i = 1; i <= divide; i++) {
  if (section * (i - 1) + 1 <= stopAngle && stopAngle <= section * i) {
    stopNumber = i;
  }
};

var rotation = setInterval(function () {
  $("#mato").rotate(angle);
  angle += speed;
}, 5);
//location
setTimeout(function () {
  clearInterval(rotation);
  angle = angle % 360 - 360;
  $("#mato").rotate({
    angle: angle,
    animateTo: stopAngle,
    callback: result
  });
  $("#hari").attr('src', $("#hari").attr('src').replace('gif', 'png'));
  }, timeout);

spin.variable('location' , rotateWheel) ;

var result = function(){

if  (rotateWheel > 0) {
  if (rotatewheel1 >= 0 && rotatewheel <= 60) {
  showscore (totalScore, Number(score6)) ;
  return false ;
      }
  if (rotatewheel >= 61 && rotatewheel <= 120) {
  showscore (totalscore, Number(score5)) ;
  return false ; 
}
if (rotatewheel >=121 && rotatewheel <= 180) {
  showscore (totalscore, Number(score4));
  return false ;
}
else{
  if(rotatewheel <=0 && rotatewheel >= -60) {
    showscore (totalscore, Number(score1));
  }
  if(rotatewheel <=-61 && rotateWheel >=-120) {
    showscore (totalscore, Number(score2)) ;
    return false;
  }
  if (rotatewheel <=-121 && rotateWheel >= -179){
    showscore (totalScore, Number(score3));
    return false;
  }
}

function showscore (totalScore, x) {
  totalScore = totalScore + x;
  spin.variable ('total' , totalScore,);
};

$("spin img").rotate({
bind: {
  mouseover: function () {
    $(this).rotate({
      animateTo: 360
    })
  },
  mouseout: function () {
    $(this).rotate({
      animateTo: 0
    })
  }
}
});

});