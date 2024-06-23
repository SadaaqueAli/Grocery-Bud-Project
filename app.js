document.addEventListener("DOMContentLoaded", () => {
    const addItemInput = document.getElementById("additem");
    const addButton = document.getElementById("addbtn");
    const list = document.getElementById("list");

    // Function to create a new list item
    function createListItem(itemText) {
        const listItem = document.createElement("li");
        listItem.textContent = itemText;

        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fa-solid", "fa-xmark");
        deleteIcon.style.cursor = "pointer";
        deleteIcon.addEventListener("click", () => {
            listItem.remove();
        });

        listItem.appendChild(deleteIcon);
        return listItem;
    }

    // Add item when the button is clicked
    addButton.addEventListener("click", () => {
        const itemText = addItemInput.value.trim();
        if (itemText !== "") {
            const newItem = createListItem(itemText);
            list.appendChild(newItem);
            addItemInput.value = "";
        }
    });

    // Add item when the Enter key is pressed
    addItemInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addButton.click();
        }
    });

    // Add remove functionality to existing items
    document.querySelectorAll("li i").forEach(deleteIcon => {
        deleteIcon.addEventListener("click", (event) => {
            deleteIcon.parentElement.remove();
        });
    });
});
