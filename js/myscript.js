document.getElementById("recipe4").style.display = "none";
            document.getElementById("recipe3").style.display = "none";
            document.getElementById("recipe2").style.display = "none";
            document.getElementById("recipe1").style.display = "none";
            document.getElementById("recipe0").style.display = "none";

    


            function myFunction(button,recipe) { 
                
                var elem = document.getElementById(button);
    if (elem.value=="hide recipe") elem.value = "show recipe";
    else elem.value = "hide recipe";  

  var x = document.getElementById(recipe);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

            }