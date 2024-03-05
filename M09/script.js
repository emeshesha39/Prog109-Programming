document.addEventListener("DOMContentLoaded", function() {
    const drawingArea = document.getElementById("drawingArea");
    const colorSelect = document.getElementById("colorSelect");
    const sizeSelect = document.getElementById("sizeSelect");
    const clearButton = document.getElementById("clearButton");

    drawingArea.addEventListener("click", function(event) {
        const color = colorSelect.value;
        const size = sizeSelect.value;
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.style.backgroundColor = color;
        dot.style.width = size + "px";
        dot.style.height = size + "px";
        dot.style.left = (event.clientX - drawingArea.offsetLeft - size / 2) + "px";
        dot.style.top = (event.clientY - drawingArea.offsetTop - size / 2) + "px";
        drawingArea.appendChild(dot);
    });

    clearButton.addEventListener("click", function() {
        drawingArea.innerHTML = "";
    });
});