
// WAIT FOR THE HTML TO LOAD
document.addEventListener("DOMContentLoaded", function() {

    // DARK MODE BUTTON
    let themeButton = document.getElementById("themeButton");

    themeButton.addEventListener("click", changeTheme);

    // WELCOME MESSAGE
    welcomeMessage();

    // AUTOMATIC FOOTER YEAR
    let year = new Date().getFullYear();
    document.getElementById("year").textContent = year;

});


// CHANGE THEME
function changeTheme() {

    // ADD OR REMOVE LIGHT MODE
    document.body.classList.toggle("light-mode");

    let button = document.getElementById("themeButton");

    // CHANGE BUTTON TEXT
    if (document.body.classList.contains("light-mode")) {
        button.textContent = "🌙 Dark Mode";
    } else {
        button.textContent = "☀️ Light Mode";
    }

}


// WELCOME MESSAGE
function welcomeMessage() {
    alert("Welcome to my Portfolio!");
}
