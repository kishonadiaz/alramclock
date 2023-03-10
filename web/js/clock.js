
const getTimeString = ({ hours, minutes, seconds, zone }) => {
    if (minutes / 10 < 1) {
      minutes = "0" + minutes;
    }
    if (seconds / 10 < 1) {
      seconds = "0" + seconds;
    }
    return `${hours}:${minutes}:${seconds} ${zone}`;
  };
let getTime = (a={hour:hour,min:min,sec:sec,zone:zone})=>{
    //console.log(a.hour)
    a.hour = parseInt(a.hour).toLocaleString('en-us',{minimumIntegerDigits:2,useGrouping:false});
    a.min = parseInt(a.min).toLocaleString('en-us',{minimumIntegerDigits:2,useGrouping:false}); 
    a.sec = parseInt(a.sec).toLocaleString('en-us',{minimumIntegerDigits:2,useGrouping:false});

    return {"hour":a.hour,"min":a.min,"sec":a.sec, "zone":a.zone};
}
const render = ()=>{
    let hour = document.getElementById("hour");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");
    let zone = document.getElementById("ampm");
    const currenDate = new Date();
    var hours = currenDate.getHours();
    var mins = currenDate.getMinutes();
    var secs = currenDate.getSeconds();
    var zones  = hours >= 12 ? "PM" : "AM";
    if(hours > 12){
        hours = hours % 12;
    }
   
    var time = getTime({"hour":hours ,"min":mins,"sec":secs,"zone":zones})
    //console.log(time);
    hour.innerHTML = time["hour"]; 
    min.innerHTML = time["min"]; 
    sec.innerHTML = time["sec"]; 
    zone.innerHTML = time["zone"]; 
    window.requestAnimationFrame(render);
}

render();