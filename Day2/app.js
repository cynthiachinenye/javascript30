let second = 0;
let minute = 0;
let hour = 0 ;
let time = new Date()

setInterval(
    function (){
        time= new Date()
        second = time.getSeconds() *6;    // its 60 seconds so divide 360deg by 60second = 6 360/60
        minute =time.getMinutes() * 6;    
        hour = time.getHours() *30 + Math.round(minute / 12);
        document.getElementById('second-arrow').style.transform= "rotate(" + second + "deg)";
        document.getElementById('minute-arrow').style.transform= "rotate(" + minute + "deg)";
        document.getElementById('hour-arrow').style.transform= "rotate(" + hour + "deg)";
    },
    1000
)








