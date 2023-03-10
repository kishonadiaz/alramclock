let alarm = document.querySelector("#alarm");
let settings = document.querySelector("#settings");
function lastparam(){
    var lasturl = location.href.split("/");
    var lastpop= lasturl.pop();
    return lastpop;
}
if(alarm){
    alarm.addEventListener("click",function(){
       // window.location.href = "./alarmpage.html";
       var lastpop = lastparam();
       location.href ="./alarmpage.html?last="+lastpop;
       
    })
}
if(settings){
    settings.addEventListener("click",function(){
        // window.location.href = "./alarmpage.html";
        var lastpop = lastparam();
        location.href ="./settings.html?last="+lastpop;
        
    })
}