function generateRhombus() {
    // Get user input values
    var height = parseInt(document.getElementById('height').value);
    var oddColor = document.getElementById('odd-color').value;
    var evenColor = document.getElementById('even-color').value;
    var symbol = document.getElementById('symbol').value;

    // Clear previous output
    document.getElementById('output-section').innerHTML = '';

    // Generate upward part of the diamond rhombus
    for (var i = 1; i <= height; i++) {
        var line = createRhombusLine(i, height, oddColor, evenColor, symbol, 'up_left');
        document.getElementById('output-section').innerHTML += line;
    }

    // Generate downward part of the diamond rhombus
    for (var i = height - 2; i >= 0; i--) {
        var line = createRhombusLine(i, height, oddColor, evenColor, symbol, 'down_right');
        document.getElementById('output-section').innerHTML += line;
    }
}

function createRhombusLine(row, height, oddColor, evenColor, symbol, direction) {
    var spaces;
    if (direction === 'up_left') {
        spaces = ' '.repeat(height - row);
    } else if (direction === 'down_right') {
        spaces = ' '.repeat(height - row);
    }
    var color = row % 2 === 0 ? evenColor : oddColor;
    var rhombusPart = `<div style="color: ${color};">${spaces}${symbol.repeat(row * 2 - 1)}</div>`;
    return rhombusPart;
}

