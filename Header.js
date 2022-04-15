let mobile_option_open = document.getElementById("mobile_option_open");
let mobile_option_bar = document.getElementById("mobile_option_bar");

let overlay = document.getElementById("overlay");
overlay.addEventListener("click", () => {
    mobile_option_bar.style.transform = "translateX(100%)";
    mobile_option_open.checked = false;
    overlay.style.display = "none";
});

let mobile_option_bar__close = document.getElementById("mobile_option_bar--close");
mobile_option_bar__close.addEventListener("click", () => {
    mobile_option_bar.style.transform = "translateX(100%)";
    mobile_option_open.checked = false;
    overlay.style.display = "none";
});

mobile_option_open.addEventListener("click", () => {
    console.log(mobile_option_open.checked);
    if(mobile_option_open.checked == true) {
        mobile_option_bar.style.transform = "translateX(0%)";
        overlay.style.display = "block";
    } else {
        mobile_option_bar.style.transform = "translateX(100%)"
    }
});