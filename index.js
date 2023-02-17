function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function showFunction() {
    var element = document.getElementById("show");
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}

var show = document.getElementsByClassName("showDetail");
var i;

for (i = 0; i < show.length; i++) {
    show[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var info_panel = this.nextElementSibling;
        if (info_panel.style.display === "block") {
            info_panel.style.display = "none";
        } else {
            info_panel.style.display = "block";
        }
    });
}