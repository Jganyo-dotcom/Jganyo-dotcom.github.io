let color = document.getElementById("Changecolor");
let Body = document.getElementById("change")
let colours;
let index ;

color.addEventListener("click" , function(){
    colours = ["red", "yellow" ,"pink" ,"green" , "white" ,"purple" , "Blue", "Orange", "Black" , "Voilet" , "brown"];
    index = Math.floor(Math.random()* colours.length);
    colours = colours[index];
    Body.style.background = colours;
})

document.getElementById("Devotional").addEventListener("click" ,function(){
    window.open("devotional.html" , target="_blank");
})

document.getElementById("Sermon").addEventListener("click" , function(){
    window.open("Sermon.html" , target="_blank");
})

document.getElementById("Groups").addEventListener("click" , function(){
    window.open("Groups.html" , target="_blank");

})
