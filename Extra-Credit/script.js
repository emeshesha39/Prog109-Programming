document.addEventListener('DOMContentLoaded', function () {
    const objectListItems = document.querySelectorAll('map[name="image-map"] area');
    
    objectListItems.forEach(area => {
        area.addEventListener('click', function () {
            const itemName = this.getAttribute('alt');
            if (itemName) {
                alert(`You found ${itemName}!`);
            } else {
                alert(`Sorry, this area doesn't contain an object.`);
            }
        });
    });
});