let a;
let time;
let date;
const opt={weekday:'long' , year:'numeric',month:'long',day:'numeric'}
setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString(undefined,opt);
    time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds()
    document.getElementById('date').innerHTML = time + "  on  " + " " + date;
}, 1000);

