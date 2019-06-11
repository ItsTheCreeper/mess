
function run() {
    document.getElementById("main").style.display = "none";
    document.body.style = "background-image: none !important";
    document.getElementById("html").style = "background-image: none !important";
    document.getElementById("myCanvas").style.display = "block";
    document.getElementById("myCanvas").style.visibility = "visible";

    var option = document.getElementById("selection");
    var script = document.getElementById("script");

    switch (option.value) {
        case "original":
            script.src = "../scripts/mess-original.js";
            break;
        case "slow":
            script.src = "../scripts/mess-slow.js";
            break;
        case "colorful":
            script.src = "../scripts/mess-colorful.js"; 
            break;
        default:
            alert("error: incorrect value");
            break;
    }
}

document.onkeydown = move;

function move(key) {
    key = key || window.event;
    if (key.keyCode == 32) {
        location.reload(true);
    }
}