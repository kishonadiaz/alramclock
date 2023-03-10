let backbutton = document.querySelector("#backbtn");
var Helper ={
    count:0,
    getcount:function(){
        return this.count;
    }
}
var Numberfield = function(a={cont:document.querySelector(""),max:59,min:0}){
    this.counter = 00;
    this.count= Helper.count++;
    this.outcont = document.createElement("div");
    this.outcont.class="alarm";
    this.id = "Num"+this.count;
    this.outcont.id = this.id;
    this.cont = document.createElement("div");
    this.span = document.createElement("span");
    this.btncont = document.createElement("div");
    this.upbtn = document.createElement("button");
    this.downbtn = document.createElement("button");
    this.is24hours = false;
    this.span.innerText = "00";
    this.upbtn.innerText = "Up";
    this.downbtn.innerText = "Down"
    this.btncont.append(this.upbtn)
    this.btncont.append(this.downbtn)
    this.cont.append(this.span);
    this.cont.append(this.btncont);
    this.cont.setAttribute("class" , "number");
    this.lastcount = this.counter;
    if(!a.max){
        a.max=59;
    }
    if(!a.min){
        a.min=0;
    }
    if(a.max == 12){
        if(this.lastcount == 00){
            this.lastcount =12;
            this.is24hours = true;
        }
    }
    // this.outcont.append(this.cont)
    this.add = function(){
        return this.cont;
    }
    this.update = ()=>{
        this.counter = this.lastcount;
        if(a.max == 12){
            if(this.lastcount == 00){
                this.lastcount =12;
                this.is24hours = true;
               
            }
            if(this.lastcount > 12){
                this.lastcount= this.lastcount % 12;
            }
        }
        this.span.innerText = this.counter.toLocaleString('en-us',{minimumIntegerDigits:2,useGrouping:false});
    }
    this.getText=function(){
        return this.span.innerText;
    }
  
    this.events = function(){
        this.upbtn.addEventListener("click",()=>{
            //this.span.innerText = this.counter.toLocaleString('en-us',{minimumIntegerDigits:2,useGrouping:false});;
            console.log(a);
            if(this.is24hours == false){
                if(this.lastcount >= a.max){
                    this.lastcount = a.min-1;
                    
                }
            }
           
            ++this.lastcount;
            setTimeout(()=>{
                this.counter = this.counter;
            },1)
            
        })
        this.downbtn.addEventListener("click",()=>{
            
            //this.span.innerText = this.counter.toLocaleString('en-us',{minimumIntegerDigits:2,useGrouping:false});
            if(this.lastcount <= a.min){
                this.lastcount = a.max+1;
            }
            
            --this.lastcount;
            
        })
    }
    

}
var AlarmField = function(){
    this.id = "H"+Helper.count++;
    this.cont = document.createElement("div");
    this.colons = document.createElement("span");
    this.colons.innerText = ":";
    this.zone = document.createElement("select");
    this.zone.setAttribute("class","zone");
    this.zone.innerHTML = `<option value="1">AM</option>
    <option value="2">PM</option>`;
    this.alarmonoroff = document.createElement("button");
    this.alarmonoroff.innerHTML =`<svg class="float large black">
    <use xlink:href="./assets/alarm-clock-svgrepo-com.svg#Capa_1"
    x="10%" y="10%" width="80%" height="80%" fill="black"/>
    </svg>`
    this.cont.setAttribute("class","alarm");
    this.hours = new Numberfield({max:12});
    this.mins = new Numberfield({max:59});

    this.cont.append(this.hours.add());
    this.cont.append(this.colons);
    this.cont.append(this.mins.add());
    this.cont.append(this.zone);
    this.cont.append(this.alarmonoroff);
    this.getHour = ()=>{
        return this.hours.getText();
    }
    this.getMin = ()=>{
        return this.mins.getText();
    }
    this.getSelected = ()=>{
        var text = this.zone.options[this.zone.selectedIndex].text;
        return text;
    }
    this.update = ()=>{
        this.hours.update();
        this.mins.update();
    }
    this.add = ()=>{
        return this.cont;
    }
    this.events = ()=>{
        this.hours.events();
        this.mins.events();
    }
}

function getUrlParams(){
    let url = window.location.href;
    let paramString = url.split('?')[1];
    let paramarr = paramString.split('&');
    let out = {};
    for(let i =0; i < paramarr.length;i++){
        let output = paramarr[i].split('=');
        console.log(output);
        var name = output[0];
        out[name] = output[1].replace("%20","_");
    }

    return out;

}
console.log(location.href);
if(backbutton){
    backbutton.addEventListener("click",()=>{
        console.log(getUrlParams()["last"])
        var last = getUrlParams()["last"];
        if(last){
            location.href = last;
        }else{
            location.href = "main.html";
        }
    });
    
;}
var v = new Numberfield({cont:document.querySelector(".alarm"),max:12})
var h = document.querySelector(".alarmscont");
var a = new AlarmField();
a.events();
    // document.querySelector(".alarm").append(v.add());
    // console.log(v);
    // v.events();
    h.append(a.add());
    function u(){
        
        // v.update();
        a.update();
        // if(v.lastcount <= 00){
        //     v.lastcount = 12;
        // }
       
        window.requestAnimationFrame(u);
    }
    u();
document.addEventListener("load",function(){
    
})