function Showdeepclean() {
  var deep = document.querySelectorAll(".deep-clean");
  var maintenance = document.querySelectorAll(".home-maintenance");
   var posconstruction = document.querySelectorAll(".postconstruction");
   image = document.querySelectorAll(".activa");

  for (var i = 0; i < deep.length; i++) {
    deep[i].hidden = false;
  }

 for (var m = 0; m < posconstruction.length; m++) {
    posconstruction[m].hidden = true;
  }
  for (var m = 0; m < maintenance.length; m++) {
    maintenance[m].hidden = true;
  }
}

function Showmaintenancehome() {
  var deep = document.querySelectorAll(".deep-clean");
  var maintenance = document.querySelectorAll(".home-maintenance");
  var posconstruction = document.querySelectorAll(".postconstruction");
  image = document.querySelectorAll(".activa");

  for (var i = 0; i < maintenance.length; i++) {
    maintenance[i].hidden = false;
  }

  for (var l = 0; l < deep.length; l++) {
    deep[l].hidden = true;
  }
  for (var m = 0; m < posconstruction.length; m++) {
    posconstruction[m].hidden = true;
  }
    for (var n = 0; n < image.length; n++) {
    image[0].classList.replace('activa', 'card-container');
  }
}


function Showpostconstruction() {
  var deep = document.querySelectorAll(".deep-clean");
  var maintenance = document.querySelectorAll(".home-maintenance");
  var posconstruction = document.querySelectorAll(".postconstruction");
  image = document.querySelectorAll(".activa");

  for (var i = 0; i < maintenance.length; i++) {
    maintenance[i].hidden = true;
  }

  for (var l = 0; l < deep.length; l++) {
    deep[l].hidden = true;
  }
  for (var m = 0; m < posconstruction.length; m++) {
    posconstruction[m].hidden = false;
  }
    for (var n = 0; n < image.length; n++) {
    image[0].classList.replace('activa', 'card-container');
  }
}


function ShowEverything() {
  var deep = document.querySelectorAll(".deep-clean");
  var maintenance = document.querySelectorAll(".home-maintenance");
  var posconstruction = document.querySelectorAll(".postconstruction");
  image = document.querySelectorAll(".activa");

  for (var i = 0; i < maintenance.length; i++) {
    maintenance[i].hidden = false;
  }

  for (var l = 0; l < deep.length; l++) {
    deep[l].hidden = false;
  }
  for (var m = 0; m < posconstruction.length; m++) {
    posconstruction[m].hidden = false;
  }
  for (var n = 0; n < image.length; n++) {
    image[0].classList.replace('activa', 'card-container');
  }

}



document.addEventListener("DOMContentLoaded", () => {
  const image = document.querySelectorAll(".card-container");
  image.forEach((image) => {
    image.addEventListener("click", () => {
      image.classList.add("activa");
      images = document.querySelectorAll("activa");
      image.classList.remove("card-container");
      posconstruction = document.querySelectorAll(".card-container");
      for (var i = 0; i < images.length; i++) {
        if (image[i].classList.contains("activa")) {
          image[i].hidden = false;
        }
      }
      for (var m = 0; m < posconstruction.length; m++) {
        posconstruction[m].hidden = true;
      }
      // }
    });
  });
});



document.addEventListener("DOMContentLoaded", () => {
 
  let timer = 0;
let delay = 200;
let clicked = false;

const image = document.querySelectorAll(".card-container");
  image.forEach((image) => {
    image.addEventListener("click", () => {
      image.classList.add("activa");
    image.addEventListener('click', () => {
    if (clicked) {
        clearTimeout(timer);
       location.reload();
        clicked = false;
    } 
    else {
        clicked = true;
        timer = setTimeout(() => {
            clicked = false;
        }, delay);
    }
});
    });
  });


});