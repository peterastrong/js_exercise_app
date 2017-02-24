// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var colors = ["red", "blue", "pink", "orange", "green", "purple", "yellow"];

function changeColors() {
  setInterval(function() {
    setTimeout(function() {
      document.getElementById("one").style["color"] = colors[Math.floor(Math.random() * 7 + 1)];
      setTimeout(function() {
        document.getElementById("two").style["color"] = colors[Math.floor(Math.random() * 7 + 1)];
        setTimeout(function() {
          document.getElementById("three").style["color"] = colors[Math.floor(Math.random() * 7 + 1)];
          
        }, 500);
      }, 500);
    }, 500);
  }, 1500);
}

$.get("https://data.ny.gov/resource/vpry-a23m.json",
  function(data) {
    var htmlString = ""; 
    for (var i = 0; i < data.length; i++) {
      var liquorStore = data[i];
      htmlString += "<div class='city' onclick='changeIt(this)'>";
      htmlString += "<h2>" + liquorStore.premises_name + "</h2>";
      htmlString += "<p onclick='changeIt(this)'>" + liquorStore.license_type_name + "</p>";
      htmlString += "<p>" + liquorStore.city + "</p>";
      htmlString += "</div>";
    }
    document.getElementById("four").innerHTML = htmlString;
  });

function changeIt(liquorStore) {
  liquorStore.style['color'] = colors[Math.floor(Math.random() * 7 + 1)];
  for (var i = 0; i < liquorStore.children.length; i++) {
    var liquor = liquorStore.children[i];
    if (i !== 0) {
      if (liquor.style.display === "none" ) {
        liquorStore.children[i].style.display = "block";
      } else {
        liquorStore.children[i].style.display = "none";
      }
    }
  }
}

function brooklynOnly() {
  var brooklynAlchohol = document.getElementsByClassName("city");
  for (var i = 0; i < brooklynAlchohol.length; i++){
    var maker = brooklynAlchohol[i];
    if (maker.innerHTML.indexOf("BROOKLYN") !== -1) {
      maker.style.display = "block";
    } else {
      maker.style.display = "none";
    }
  }
}

function allAlchohol() {
  var allMakers = document.getElementsByClassName("city");
  for (var i = 0; i < allMakers.length; i++) {
    var allMaker = allMakers[i];
    allMaker.style.display = "block";
  }
}

