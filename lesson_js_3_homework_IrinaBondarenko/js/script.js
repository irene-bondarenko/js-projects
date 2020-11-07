document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("keyup", function (evt) {

        if (evt.keyCode == 32) {
            let bgColor = document.querySelector(".color-wrap"),
                hexColorText = document.querySelector(".hex-color");
            var hex = '#';
            var range = 'ABCDEF0123456789';

            for (var i = 0; i < 6; i++) {
                hex += range.charAt(Math.floor(Math.random() * range.length));
            }
            bgColor.style.background = hex;
            hexColorText.innerHTML = hex;

            var e, t, n, r, i = bgColor.style.background;
            if (i.match(/^rgb/)) {
                i = i.match(/rgb\(([^)]+)\)/)[1];
                i = i.split(/ *, */).map(Number);
                e = i[0];
                t = i[1];
                n = i[2]
            } else if ("#" == i[0] && 7 == i.length) {
                e = parseInt(i.slice(1, 3), 16);
                t = parseInt(i.slice(3, 5), 16);
                n = parseInt(i.slice(5, 7), 16)
            } else if ("#" == i[0] && 4 == i.length) {
                e = parseInt(i[1] + i[1], 16);
                t = parseInt(i[2] + i[2], 16);
                n = parseInt(i[3] + i[3], 16)
            }

            r = (e * 299 + t * 587 + n * 114) / 1e3;
            if (r < 125) {
                hexColorText.style.color = "white";
            } else {
                hexColorText.style.color = "black";
            }
        };
    });
});

// Get the element with id="defaultOpen" and click on it
document.querySelector(".defaultOpen").click();

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablink;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablink = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablink.length; i++) {
        tablink[i].className = tablink[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
}