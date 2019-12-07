// Check for loaded details and change page content
// Used on "View Planets" Page
function getPlanetArticles(){

  planets.update(file.getFileData());

  document.getElementById("planetTitleSpace").innerHTML = planets.returnPlanet().title;
  document.getElementById("planetContentSpace").innerHTML = planets.returnPlanet().content;
  document.getElementById("planetImage").src = planets.returnPlanet().image;
  
  planets.addIndex();

}

//When pressing the "add" button on Add PLanets page
//Download previous, add to it, stringify and call Save Content function.
function addPlanet(){
  let newPlanet = {"title": "temp", "content":"other", "image":""};

  newPlanet.title = document.getElementById("planetName").value;
  newPlanet.content = document.getElementById("planetDescription").value;
  newPlanet.image = document.getElementById("planetURL").value;

  if (newPlanet.title === "" || newPlanet.content === "" || newPlanet.image === ""){
    alert("Missing Information, please complete Name, Content and Image URL")
  }
  else{
    planets.addData(newPlanet);
    file.newData(planets.saveDataString());
    file.saveContent();

    document.getElementById("planetName").value = "";
    document.getElementById("planetDescription").value = "";
    document.getElementById("planetURL").value = "";

    swapAddArea();

  }

}

function getBigger(){
  resizeText(1, "planetContentSpace");
}

function getSmaller(){
  resizeText(-1, "planetContentSpace");
}

function mainRun(){
  let upFontButton = document.getElementById("upFont");
  upFontButton.addEventListener("click", getBigger, false);

  let downFontButton = document.getElementById("downFont");
  downFontButton.addEventListener("click", getSmaller, false);

  let planetButton = document.getElementById("planetButton");
  planetButton.addEventListener("click", getPlanetArticles, false);

  let addPlanetButton = document.getElementById("addPlanet");
  addPlanetButton.addEventListener("click", addPlanet, false);

  let hideButtonButton = document.getElementById("hideButton");
  hideButtonButton.addEventListener("click", function(){swapAddArea()}, false);

}

const planets = new planetData();
let file = new loadJSONData("https://api.myjson.com/bins/dyuvq")

document.getElementById("hiddenAdd").style.display = "none";
mainRun();