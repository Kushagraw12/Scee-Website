function b1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("readMore1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Continue reading";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function b2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("readMore2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Continue reading";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}