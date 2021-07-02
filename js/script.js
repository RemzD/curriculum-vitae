const checkbox = document.getElementById("checkbox");
let container = document.getElementsByClassName("container");

checkbox.addEventListener("change", () => {
    // changes color theme
    document.querySelector(".container").classList.toggle("dark");
})