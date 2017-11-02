
var isOpen = false;

function toggleMenu(e) {
    isOpen = !isOpen;
    var myMenu = document.querySelector('.menu-wrapper');
    var overlay = document.querySelector('.overlay');

    myMenu.classList.toggle('active'); 
    overlay.classList.toggle('active');
}

document.onkeydown = function(e) {
    if (e.keyCode == 27) {
        isOpen && 
        toggleMenu();
    }
}

$("#leftside-navigation .sub-menu > a").click(function(e) {
    $("#leftside-navigation ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
    e.stopPropagation()
  })



  
  //////Se le pasaria un array con todos los ejercicios
  function addFields(){
    // Number of inputs to create
    // Container <div> where dynamic content will be placed
    var container = document.getElementById("form-group-container");
    // Clear previous contents of the container

    var d = document.createElement("div");
    d.classList.add("form-group");

    // Create an <input> element, set its type and name attributes
    var label = document.createElement("label");
    label.classList.add("form-label");
    label.innerHTML = "Ejercicio";

    var input = document.createElement("select");
    input.name = "ejer";
    input.classList.add("form-control");

    
    for(var i=0;i<3;i++){
      var option = document.createElement("option");
      option.value="hola";
      option.innerHTML = "Dominada";
      input.appendChild(option);
    }

    d.appendChild(label);
    d.appendChild(input);
    
    container.appendChild(d);
    // Append a line break 
    container.appendChild(document.createElement("br"));
    
}




////////

function diffForm(n){
  var r = document.getElementById("select-form");

  for(var i=1;i<=n;i++){
    document.getElementById("form"+i).classList.add("hide");
  }

  
  switch(r.value){
    case "opt1":
      document.getElementById("form1").classList.toggle("hide");   
      break;
    case "opt2":
      document.getElementById("form2").classList.toggle("hide");
      break;
    case "opt3":
      document.getElementById("form3").classList.toggle("hide");
      break;
    default:
      break;
  }

}