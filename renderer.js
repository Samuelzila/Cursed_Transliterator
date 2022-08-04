// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

/* MENU BAR MANAGER */
const minimiseButton = document.getElementById("minimise-btn");
const maxUnmaxButton = document.getElementById("max-unmax-btn");
const closeButton = document.getElementById("close-btn");

minimiseButton.addEventListener("click", e => {
    window.menu.minimiseWindow();
});
  
maxUnmaxButton.addEventListener("click", e => {
    console.log(window.menu.isMaximised())
    if (!window.menu.isMaximised()) {
        maxUnmaxButton.firstChild.classList.add('fa-window-restore');
        maxUnmaxButton.firstChild.classList.remove('fa-window-maximize');
    }
    else {
        maxUnmaxButton.firstChild.classList.remove('fa-window-restore');
        maxUnmaxButton.firstChild.classList.add('fa-window-maximize');
    }
    window.menu.maximiseWindow();
});
  
closeButton.addEventListener("click", e => {
    window.menu.closeWindow();
});
