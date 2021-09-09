/*
#####        flashes messages        #####
#          Developed by Baramex          #
### github: https://github.com/baramex ###

License: lgpl-3.0
*/

window.addEventListener("load", () => {
    var div = document.createElement("div");
    div.id = "flashDiv",
        div.style = "z-index: 6;top: 0;left: 0;width: 80%;margin-left: 10%;position: fixed;";
    document.body.appendChild(div);
});

function appendFlash(type, message, time = 2500, parent = null) {
    var flash = generateFlash(type, message);

    if (parent) {
        parent.appendChild(flash);
    } else {
        if (document.getElementById("flashDiv")) document.getElementById("flashDiv").appendChild(flash);
        else console.error("Please wait body is loaded to generate flash!");
    }

    if (time != 0) {
        setTimeout(function() {
            $(flash).fadeOut(500, function() {
                flash.remove();
            });
        }, time);
    }
}

function generateFlash(type, message) {
    var flash = document.createElement("div");
    flash.classList.add("flash");
    flash.classList.add(type);
    flash.innerHTML = "<p style='display: inline-block;vertical-align: middle;margin: 0;margin-left: 3px;'><img style='vertical-align: middle;' src='http://baramex.fr:9999/utils/images/flashs/" + type + ".png' width='50px'></p> <p class='mes' style='display: inline-block; padding: 5px;line-height: 40px; margin: 0'>" + message + "</p>";

    return flash;
}