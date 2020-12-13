function updateClock(){
    var doc=window.content.document
    var dt = new Date();
    doc.getElementById("datetime").innerHTML = dt.toLocaleTimeString();
}

setInterval(updateClock, 0);