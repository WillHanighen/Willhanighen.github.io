let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);
document.addEventListener("mousedown", onMouseDown);
document.addEventListener("mouseup", onMouseUp);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;
  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;

  if (e.target.tagName === 'A') {
    innerCursor.style.background = 'rgb(108, 108, 218)';
    innerCursor.style.width = '15px';
    innerCursor.style.height = '15px';
    innerCursor.style['mix-blend-mode'] = 'normal';
  } else {
    innerCursor.style.background = 'white';
    innerCursor.style.width = '10px';
    innerCursor.style.height = '10px';
innerCursor.style['mix-blend-mode'] = 'difference';
  }
}

function onMouseDown(e) {
  if (e.button === 0) {
    outerCursor.style.width = "45px";
    outerCursor.style.height = "45px";
  } else if (e.button === 2) {
    outerCursor.style.width = "20px";
    outerCursor.style.height = "20px";
  }
}

function onMouseUp(e) {
  outerCursor.style.width = "30px";
  outerCursor.style.height = "30px";
}
