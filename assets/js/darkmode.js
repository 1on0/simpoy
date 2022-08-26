$(document).ready (function() {
    $('#tes').show();
});


function setTheme(mode) {
    sessionStorage.setItem("dark-mode-storage", mode);

    if(mode == "dark") {
        document.body.classList.add('dark');
    }
    else if(mode == "light") {
        document.body.classList.remove('dark')
    }
}

var savedTheme = sessionStorage.getItem("dark-mode-storage") || "light";
setTheme(savedTheme);

var toggle = document.getElementById("darkmode");

toggle.addEventListener("click", () => {
    if (document.body.classList.contains('dark')) {
        setTheme("light");
    } else {
        setTheme("dark");
    }
});

