const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
    // changes color theme
    document.querySelector(".container").classList.toggle("dark");
    if (document.querySelector(".avatar").getAttribute("src") == "./images/avatar.jpg") {
        document.querySelector(".avatar").setAttribute("src", "./images/avatar_glitch.gif");
    } else {
        document.querySelector(".avatar").setAttribute("src", "./images/avatar.jpg")
    }
})