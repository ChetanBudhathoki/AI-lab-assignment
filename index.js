var xmove = 1500;
var xmoveplane=1400;
var turn = "green";
var timedelay = 3000;
function xmoving() {
  xmove = xmove + 10;

  document.querySelector(".check").style.left = xmove + "px";
  // document.querySelector(".planes").style.left = xmove + "px";
  if (xmove > 1500) {
    xmove = -400;
  }

  console.log(xmove);
}
setInterval(() => {
  if (!(turn === "red" && xmove === 600)) {
    xmoving();
  }
}, 5);

// this function is for plane
function xmovingplane() {
  xmoveplane = xmoveplane+ 10;

  // document.querySelector(".check").style.left = xmoveplane + "px";
  document.querySelector(".planes").style.left = xmoveplane + "px";
  if (xmoveplane > 1400) {
    xmoveplane = -400;
  }

  console.log(xmoveplane);
}
setInterval(() => {
  if (!(turn === "red" && xmoveplane === 600)) {
    xmovingplane();
  }
}, 25);


// setInterval(xmoving , 5);


var traffic = function () {
  if (turn == "green") {
    turn = "red";
    // document.querySelector(".red").style.display = "block";
    // document.querySelector(".green").style.display = "none";
    document.querySelector(".red").style.background = "red";
    document.querySelector(".green").style.background = "transparent";
 
  } else {
    turn = "green";
    // document.querySelector(".green").style.display = "block";
    // document.querySelector(".red").style.display = "none";
    document.querySelector(".green").style.background = "green";
    document.querySelector(".red").style.background = "transparent";


  }
  console.log(turn);
};
setInterval(traffic, 5000);
