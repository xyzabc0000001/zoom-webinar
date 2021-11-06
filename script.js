document.querySelector(".emoji").style.display = "none";
$(window).on('load resize', function () {
  if ($(window).width() > 1024) {
    var x = document.getElementsByTagName("BODY")[0];
    x.style.backgroundColor = "#221f1f";
    
    window.location = "https://www.google.com"

    document.querySelector(".img").style.display = "none";
    document.querySelector(".emoji").style.display = "none";
  }
});
setTimeout(function () {
  document.querySelector(".img").style.display = "none";
  document.querySelector(".emoji").style.display = "flex";
}, 7000);

//emoji
const emoji = document.querySelector(".emoji");
var display = document.getElementsByClassName("emoji");
var emojiList = ["🥳", "🤩", "👾", "😵", "👨‍💻", "🎮", "🖕"];
var i = 0;
var timer;

window.onload = function randomEmoji() {
  clearInterval(timer);

  // Call show Emoji to let it shows instanly.
  showEmoji();

  // Put showEmoji function to let it repeats
  timer = setInterval(function () {
    showEmoji();
  }, 25);
}

function showEmoji() {
  i = Math.floor(Math.random() * emojiList.length);
  emoji.innerHTML = emojiList[i];
}

setTimeout(function () {
  // clear interval timer to let it stops
  clearInterval(timer);
  emoji.innerHTML = emojiList[6]
}, 10000);