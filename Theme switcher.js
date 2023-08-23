let bgContainerEl = document.getElementById("bgContainer");
let headingEl = document.getElementById("heading");
let themeUserInputEl = document.getElementById("themeUserInput");

let lightThemeUrl = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
let darkThemeUrl = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";


function themesChanging(event) {
    if (event.key === "Enter") {
        let themeInput = themeUserInputEl.value;

        if (themeInput === "Light") {
            bgContainerEl.style.backgroundImage = lightThemeUrl;
            headingEl.style.color = "#014d40";
        } else if (themeInput === "Dark") {
            bgContainerEl.style.backgroundImage = darkThemeUrl;
            headingEl.style.color = "#ffffff";
        } else {
            alert("Enter a Valid Theme");
        }
    }
}

themeUserInputEl.addEventListener("keydown", themesChanging);