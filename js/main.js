document.getElementById("czesc").addEventListener("click", function(){
    var element = document.getElementById("header");
    element.classList.add("change-opacity");
    setTimeout( function() { window.location = 'main.html' }, 1800 )
});