var redButton = document.getElementById('red');
var blackButton = document.getElementById('black');
var blueButton = document.getElementById('blue');
var pinkButton = document.getElementById('pink');
var purpleButton = document.getElementById('purple');
var time = document.getElementById('time');
var heartRate = document.getElementById('heart-rate');

var interval;

redButton.addEventListener('click',function(){
    var currImg = document.getElementById('watch-img');
    currImg.src = 'https://ashar2301.github.io/Coursera/images/watch-red.png';
})

blackButton.addEventListener('click',function(){
    var currImg = document.getElementById('watch-img');
    currImg.src = 'https://ashar2301.github.io/Coursera/images/watch-black.png';
})

blueButton.addEventListener('click',function(){
    var currImg = document.getElementById('watch-img');
    currImg.src = 'https://ashar2301.github.io/Coursera/images/watch-blue.png';
})

pinkButton.addEventListener('click',function(){
    var currImg = document.getElementById('watch-img');
    currImg.src = 'https://ashar2301.github.io/Coursera/images/watch-pink.png';
})

purpleButton.addEventListener('click',function(){
    var currImg = document.getElementById('watch-img');
    currImg.src = 'https://ashar2301.github.io/Coursera/images/watch-purple.png';
})

time.addEventListener('click',function(){
    var heart = document.getElementById('heart');
    console.log(heart.style);
    heart.style.zIndex = "0";
    var intervalobj = setInterval(function(){
        var text = document.getElementById('text');
        text.style.zIndex = "200";
        var obj = new Date();
        var arr = obj.toString().split(" ");
        text.innerHTML = arr[4];
        interval = intervalobj;
    },500)
}) 

heartRate.addEventListener('click',function(){
    clearInterval(interval);
    var heart = document.getElementById('heart');
    var text = document.getElementById('text');
    text.style.zIndex = "0";
    console.log(heart.style);
    heart.style.zIndex = "200";

})