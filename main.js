showTime();
function showTime(){
    var now = new Date;
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    var format;
    if(h > 12){
        format = "PM";
    }else{
        format = "AM";
    }
    h = (h == 00) ? h += 12 : h;
    h = (h > 12) ? h - 12 : h;
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    var time = document.getElementById("time");
    time.innerHTML= h + ':' + m + ':' + s + ' ' + format;
    setTimeout(showTime, 1000);
}

