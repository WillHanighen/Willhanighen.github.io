window.onload = function() {
    var iframe = document.getElementById("game-embed");
    iframe.focus();
};

function toggleFullscreen() {
    var elem = document.getElementById("game-embed");
    if (!document.fullscreenElement) {
        elem.requestFullscreen().catch(err => {
            alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
        });
    } else {
        document.exitFullscreen();
    }
}