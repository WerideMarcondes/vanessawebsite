function Showdeepclean() {
  var deep = document.querySelectorAll(".deep-clean");
  var maintenance = document.querySelectorAll(".home-maintenance");
   var posconstruction = document.querySelectorAll(".postconstruction");;

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

  for (var i = 0; i < maintenance.length; i++) {
    maintenance[i].hidden = false;
  }

  for (var l = 0; l < deep.length; l++) {
    deep[l].hidden = true;
  }
  for (var m = 0; m < posconstruction.length; m++) {
    posconstruction[m].hidden = true;
  }
}


function Showpostconstruction() {
  var deep = document.querySelectorAll(".deep-clean");
  var maintenance = document.querySelectorAll(".home-maintenance");
  var posconstruction = document.querySelectorAll(".postconstruction");

  for (var i = 0; i < maintenance.length; i++) {
    maintenance[i].hidden = true;
  }

  for (var l = 0; l < deep.length; l++) {
    deep[l].hidden = true;
  }
  for (var m = 0; m < posconstruction.length; m++) {
    posconstruction[m].hidden = false;
  }
}


function ShowEverything() {
  var deep = document.querySelectorAll(".deep-clean");
  var maintenance = document.querySelectorAll(".home-maintenance");
  var posconstruction = document.querySelectorAll(".postconstruction");

  for (var i = 0; i < maintenance.length; i++) {
    maintenance[i].hidden = false;
  }

  for (var l = 0; l < deep.length; l++) {
    deep[l].hidden = false;
  }
  for (var m = 0; m < posconstruction.length; m++) {
    posconstruction[m].hidden = false;
  }
}


