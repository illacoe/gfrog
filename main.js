
const tabFolder = document.querySelector('.tab-mobile-menu')
const tabSesion = document.querySelector('.tab-mobile-sesion')
const body = document.querySelector('body')
const responsive = window.matchMedia('screen and (max-width:959px)')
const folderBtn = document.getElementById('folder')
const sesionBtn = document.getElementById('sesion')


folderBtn.addEventListener('click', mostrarfolder)
function mostrarfolder() {
    if (tabFolder.classList.contains('is-active')) {
        tabFolder.classList.remove('is-active')
        body.classList.remove('is-active')
        folderBtn.firstChild.classList.remove('is-active')
        folderBtn.lastChild.classList.remove('is-active')
    }else {
        tabFolder.classList.add('is-active')
        tabSesion.classList.remove('is-active')
        body.classList.add('is-active')
        folderBtn.firstChild.classList.add('is-active')
        folderBtn.lastChild.classList.add('is-active')
    }
}

sesionBtn.addEventListener('click', mostrar)
function mostrar() {
    if (tabSesion.classList.contains('is-active')) {
        tabSesion.classList.remove('is-active')
        body.classList.remove('is-active')
        sesionBtn.firstChild.classList.remove('is-active')
        sesionBtn.lastChild.classList.remove('is-active')
    }else {
        tabSesion.classList.add('is-active')
        tabFolder.classList.remove('is-active')
        body.classList.add('is-active')
        sesionBtn.firstChild.classList.add('is-active')
        sesionBtn.lastChild.classList.add('is-active')
    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}