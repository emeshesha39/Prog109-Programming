var checklist = document.getElementById("checklist");

var items = checklist.querySelectorAll("li")
var input = checklist.querySelectorAll("input")

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", edititems);
    input[i].addEventListener("blur", updateinput);
    input[i].addEventListener("keypress", itemkeypress);
}

function edititems() {
    this.className = "edit";
    var input = this.querySelector("input")
    input.focus();
    input.setSelectionRange(0, input.value.lenght);
}

function updateinput() {
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.className = "";
}

function itemkeypress(event) {
    
    if(event.which == 13){
        updateinput.call(this);
    }
}











