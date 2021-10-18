function sayTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
var intervalID = setInterval(sayTime, 1000);
