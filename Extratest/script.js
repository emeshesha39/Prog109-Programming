const items = [
    { name: 'car', image: 'https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_640.jpg' },
    { name: 'cat', image: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?cs=srgb&dl=pexels-pixabay-104827.jpg&fm=jpg' },
    { name: 'tree', image: 'https://cdn.pixabay.com/photo/2013/04/03/12/05/tree-99852_640.jpg' },
    // Add more items with their respective image URLs
];

function createGrid() {
    const grid = document.getElementById('grid');
    items.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('item');
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.width = 100; // Set the width of the image
        img.height = 100; // Set the height of the image
        img.addEventListener('click', () => selectItem(item.name));
        div.appendChild(img);
        grid.appendChild(div);
    });
    targetItem = items[Math.floor(Math.random() * items.length)].name;
}

function selectItem(item) {
    if (item === targetItem) {
        document.getElementById('result').textContent = 'Correct! You found the ' + item + '.';
        // Select a new target item randomly
        targetItem = items[Math.floor(Math.random() * items.length)].name;
    } else {
        document.getElementById('result').textContent = 'Incorrect. Keep searching!';
    }
}

function checkGuess() {
    if (!targetItem) {
        alert('Please select an item first.');
        return;
    }
    const guess = prompt('What do you spy?');
    if (guess === targetItem) {
        document.getElementById('result').textContent = 'Congratulations! You found the ' + targetItem + '.';
    } else {
        document.getElementById('result').textContent = 'Sorry, that\'s not correct. Keep searching!';
    }
}

// Initialize the game
createGrid();