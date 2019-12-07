// Resize text function 
function resizeText(multiplier, id) {
  if (document.getElementById(id).style.fontSize == "") {
    document.getElementById(id).style.fontSize = "1.0em";
  };
  document.getElementById(id).style.fontSize = parseFloat(document.getElementById(id).style.fontSize) + (multiplier * 0.2) + "em";
};

function swapAddArea(){
  let display = document.getElementById("hiddenAdd");
  let button = document.getElementById("hideButton");
  if (display.style.display === "none"){
    display.style.display = "block";
    button.value = "Hide";
  }
  else{
    display.style.display = "none";
    button.value = "Add";
  }

}