document.onreadystatechange = function () {
    document.getElementById("width").addEventListener("input",recount)
}

function recount(){
    let input = document.getElementById("width")
    let width = Number.parseInt(input.value)
    let leftBorder = document.getElementById("leftborder")
    let rightBorder = document.getElementById("rightborder")
    let zone = document.getElementById("zone")
    let count = Number.parseInt(document.getElementById("count").value)
    zone.style.width = (100/width +width) + "%"
    while (zone.firstChild) {
        zone.removeChild(zone.firstChild);
    }
    leftBorder.style.width = (100-width)/2 + "%"
    rightBorder.style.width = (100 - width)/2 + "%"
    leftBorder.animate([{
        opacity: 0.2
    },
        {
            opacity: 0
        }],1000)
    rightBorder.animate([{
        opacity: 0.2
    },
        {
            opacity: 0
        }],1000)
    let dots = []
    for (let i = 0;i < count; i++){
        let temp = (document.createElement("div"))
        zone.appendChild(temp)
        temp.className = "dot"
        zone.style.zIndex = String (i)
        temp.style.right = (randn_bm()*100) + "%"
        temp.style.top = (Math.random()*100) + "%"
        dots.push(temp)
    }
}

function randn_bm() {
    var u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) return randn_bm(); // resample between 0 and 1
    return num;
}