function generateRhombus() {
    // Get user input values
    var height = parseInt(document.getElementById('height').value);
    var oddColor = document.getElementById('odd-color').value;
    var evenColor = document.getElementById('even-color').value;
    var symbol = document.getElementById('symbol').value;

    // Clear previous output
    document.getElementById('diamond-rhombus').innerHTML = '';

    // Generate the upper half of the diamond rhombus
    for (var i = 1; i <= height; i++) {
        var line = createRhombusLine(i, height, oddColor, evenColor, symbol);
        document.getElementById('diamond-rhombus').innerHTML += line + '<br>';
    }

    // Generate the lower half of the diamond rhombus
    for (var i = height - 1; i >= 1; i--) {
        var line = createRhombusLine(i, height, oddColor, evenColor, symbol);
        document.getElementById('diamond-rhombus').innerHTML += line + '<br>';
    }
}

function createRhombusLine(row, height, oddColor, evenColor, symbol) {
    var spaces = ' '.repeat(Math.abs(height - row));
    var color = row % 2 === 0 ? evenColor : oddColor;
    var rhombusPart = `<span style="color: ${color};">${spaces}${symbol.repeat(row * 2 - 1)}</span>`;
    return rhombusPart;
}

