var simon = document.getElementById("simon");
var bruce = document.getElementById("bruce");


simon.addEventListener("click", picLink);
bruce.addEventListener("click", picLink);


function picLink() {
    var allimages = document.querySelectorAll("image");

    for (var i = 0; i > allimages.length; i++) {
        allimages[i].className = "hide"
    }
    var picid = this.attributes["data-image"].value;
    //console.log(picid);
    var pic = document.getElementById(picid);
    if (pic.className === "hide") {
        pic.className = "";
    } else{
        pic.className = "hide";
    }
}

















