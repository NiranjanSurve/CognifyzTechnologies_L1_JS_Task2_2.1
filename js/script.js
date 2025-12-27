const button = document.getElementById("colorBtn");
const colorText = document.getElementById("colorName");
const card = document.getElementById("card");

const colors = [
    { name: "Navy Blue", btn: "#0a2540", bg: "#e6edf5" },
    { name: "Green", btn: "#28a745", bg: "#eaf7ee" },
    { name: "Orange", btn: "#fd7e14", bg: "#fff2e6" },
    { name: "Red", btn: "#dc3545", bg: "#fdeaea" }
];

let index = 0;

button.addEventListener("click", () => {
    index = (index + 1) % colors.length;

    // Change button & background color
    button.style.backgroundColor = colors[index].btn;
    document.body.style.backgroundColor = colors[index].bg;

    // Update text
    colorText.textContent = colors[index].name;

    // Flip effect
    card.classList.add("flip");
    setTimeout(() => {
        card.classList.remove("flip");
    }, 600);
});
