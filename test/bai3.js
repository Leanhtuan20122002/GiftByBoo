let body = document.getElementById("body");
let change = document.getElementById("change");
function random_255() {
    return  (Math.round(Math.random() * 255) + 1);
}
function color() {
    return "rgb("+random_255()+","+random_255()+","+random_255()+")";
}
change.addEventListener("click", () => {
    body.style.backgroundColor = color();
})