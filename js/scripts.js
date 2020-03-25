// $(document).ready(function(){
//     $("#mycarousel").carousel( { interval: 2000 } );
//     $("#carousel-pause").click(function(){
//         $("#mycarousel").carousel('pause');
//     });
//     $("#carousel-play").click(function(){
//         $("#mycarousel").carousel('cycle');
//     });
// });

$('#carousel-play').click(function () {
    $('#mycarousel').carousel('cycle');
});
$('#carousel-pause').click(function () {
    $('#mycarousel').carousel('pause');
});

document.getElementById("recipe4").style.display = "none";
document.getElementById("recipe3").style.display = "none";
document.getElementById("recipe2").style.display = "none";
document.getElementById("recipe1").style.display = "none";
document.getElementById("recipe0").style.display = "none";




function myFunction(button,recipe,header) { 
    
    var elem = document.getElementById(button);
if (elem.value=="hide recipe") elem.value = "show recipe";
else elem.value = "hide recipe"; 


var x = document.getElementById(recipe);
if (x.style.display === "none") {
x.style.display = "block";
} else {
x.style.display = "none";
}



var y = document.getElementById(header).innerText;
if (y =="Our most famous product"){
document.getElementById("famous").innerHTML = "You couldn't resist";
}
else if (y =="You couldn't resist")
{
    document.getElementById("famous").innerHTML = "Our most famous product";
}
 else if (y =="Week’s offer")
{
    document.getElementById("offer").innerHTML = "Vegan spotted";
}
else if (y =="Vegan spotted")
{
    document.getElementById("offer").innerHTML = "Week’s offer";
}

else if (y =="Our special Product")
{
    document.getElementById("special").innerHTML = "Trully special";
}
else if (y =="Trully special")
{
    document.getElementById("special").innerHTML = "Our special Product";
}

else if (y =="The more different the more tastful it becomes")
{
    document.getElementById("different").innerHTML = "Attractive by it's difference";
}
else if (y =="Attractive by it's difference")
{
    document.getElementById("different").innerHTML = "The more different the more tastful it becomes";
}

else if (y =="Our New Product")
{
    document.getElementById("new").innerHTML = "So you're up for some new taste";
}
else if (y =="So you're up for some new taste")
{
    document.getElementById("new").innerHTML = "Our New Product";
}


}