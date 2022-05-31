// for hour hand h hour = 30h + m/2;
// for minute hand m min = 6m + s/10 + ms/10000; 60min =360, 1 min = 6, 60 sec = 6, 1 sec = 1/10, 1000 ms = 1/10, 1 ms = 1/10000;
// for second hand s sec = 6s;
// 60 sec = 360, 1sec = 6, 1000ms = 6, 1ms = 6/1000

setInterval(() => {
    // console.log('Gaurav Mishra')
    let date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();
    mstime = date.getMilliseconds();
    // console.log(htime);
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime + stime/10 + mstime/10000;
    srotation = 6*stime + 6*mstime/1000;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);