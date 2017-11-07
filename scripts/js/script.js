function dropMenu() {
    var menu = document.getElementById("nav");
    if (menu.style.opacity === "1") {
        menu.style.opacity = "0";
        menu.style.top = "-170px";
    } else {
        menu.style.opacity = "1";
        menu.style.top = "170px";
    }
}

// color: #6e48ff;

// background-color: #6e48ff;
// color: #e8e8e8;

function rotate1() {
     document.getElementById("article1").style.transform="rotateY(0deg)";
     document.getElementById("navItemOverMij").style.backgroundColor="#6e48ff";
     document.getElementById("navItemOverMij").style.color="#e8e8e8";
}

function normal1() {
    document.getElementById("article1").style.transform="rotateY(-30deg)";
    document.getElementById("navItemOverMij").style.backgroundColor="rgba(255, 255, 255, 0)";
    document.getElementById("navItemOverMij").style.color="#6e48ff";
}


function rotate2() {
     document.getElementById("article2").style.transform="rotateY(0deg)";
     document.getElementById("navItemOpleiding").style.backgroundColor="#6e48ff";
     document.getElementById("navItemOpleiding").style.color="#e8e8e8";
}

function normal2() {
    document.getElementById("article2").style.transform="rotateY(-30deg)";
    document.getElementById("navItemOpleiding").style.backgroundColor="rgba(255, 255, 255, 0)";
    document.getElementById("navItemOpleiding").style.color="#6e48ff";
}


function rotate3() {
     document.getElementById("article3").style.transform="rotateY(0deg)";
     document.getElementById("navItemBeroep").style.backgroundColor="#6e48ff";
     document.getElementById("navItemBeroep").style.color="#e8e8e8";
}

function normal3() {
    document.getElementById("article3").style.transform="rotateY(-30deg)";
    document.getElementById("navItemBeroep").style.backgroundColor="rgba(255, 255, 255, 0)";
    document.getElementById("navItemBeroep").style.color="#6e48ff";
}
