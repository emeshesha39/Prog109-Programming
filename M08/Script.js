function Addnewgroceryitem() {
    // Get the value from the input field
    var newItem = document.getElementById("newItem").value;

    // Check if the input field is not empty
    if (newItem.trim() !== "") {
        // Create a new list item
        var li = document.createElement("li");
        li.textContent = newItem;

        // Append the new item to the list
        document.getElementById("todo").appendChild(li);

        // Clear the input field
        document.getElementById("newItem").value = "";
    } else {
        // Alert the user if the input field is empty
        alert("Please enter a valid grocery item.");
    }
}
