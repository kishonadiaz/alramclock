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
    this.setText = (val)=>{
        if(val > 59){
            val = 59;
        }
        if(val < 0){
            val = 0;
        }
        this.lastcount = val;
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
var MusicList = function(){
    this.cont = document.createElement("ul");
    this.cont.classList.add("close");
    
    this.listitems = [];
    this.add = (name)=>{
        var l = document.createElement("li");
        l.innerText = name;
        var b = document.createElement("button");
        b.innerHTML = "Select";
        l.append(b);
        this.listitems.push(l);
        this.append(l);
    }
    this.musicList =async ()=>{
        var n = await eel.list_of_music()();

        for(var i of n){
            this.add(i);
        }
    }
    this.update =()=>{
        // var m = this.cont;
        // console.log(m.querySelectorAll("li"));
    }
    this.append = (item)=>{
        this.cont.append(item);
    }
    this.get = (val)=>{
        var m = this.cont.querySelectorAll(val);
        if(m!= null)
        return m;
        
    }
    this.addto = ()=>{
        return this.cont;
    }
}
var AlarmField = function(){
    this.id = "H"+Helper.count++;
    this.musicItems = new MusicList();
    this.cont = document.createElement("div");

    this.row = document.createElement("div");
    this.row.setAttribute("class","row");

    this.musictitlecont = document.createElement("div")
    this.musictitlecont.setAttribute("class","ringsong")
    this.musicspan = document.createElement("span");
    this.musicspan.innerText = "Test";
    this.musichr = document.createElement("hr");

    this.musictitlecont.append(this.musicspan);
    this.musictitlecont.append(this.musichr);

    

    this.musiclistrow = document.createElement("div");
    this.musiclistrow.setAttribute("class","row");
    console.log(this.musicItems);
    this.musiclistrow.append(this.musictitlecont);
    this.musiclistrow.append(this.musicItems.addto())

    this.titlerow = document.createElement("div");
    this.titlerow.setAttribute("class","row");

    this.title = document.createElement("span");
    this.title.innerHTML = "Title";
    this.title.setAttribute("class","title");
    this.title.setAttribute("contentEditable","true");

    this.hrdiv = document.createElement("div");
    this.hrdiv.setAttribute("class","hrdiv");
    this.hr = document.createElement("hr");
    this.hrdiv.append(this.hr);

    this.titlerow.append(this.title);
    //this.titlerow.append(this.hrdiv);

    this.deletebtn = document.createElement("button");
    this.deletebtn.innerText = "Delete";
    this.deletebtn.classList.add("close");

    this.isontogglecont = document.createElement("div");
    this.isontogglecont.setAttribute("class","toggle")
    this.toogleswitch = document.createElement("div");
    this.toogleswitch.setAttribute("class","toggleswitch");
    this.tooglecheckbox = document.createElement("input");
    this.tooglecheckbox.type="checkbox";
    this.tooglecheckbox.setAttribute("class","togglecheckbox");

    this.isontogglecont.append(this.toogleswitch);
    this.isontogglecont.append(this.tooglecheckbox);

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

    this.row.append(this.deletebtn);
    this.row.append(this.isontogglecont);
    this.row.append(this.hours.add());
    this.row.append(this.colons);
    this.row.append(this.mins.add());
    this.row.append(this.zone);
    this.row.append(this.alarmonoroff);


    this.cont.append(this.titlerow);
    this.cont.append(this.row);
    this.cont.append(this.musiclistrow);

    this.getmusiclist = async ()=>{
        this.musicItems.musicList();
    }
    this.getHour = ()=>{
        return this.hours.getText();
    }
    this.setHour = (val)=>{
        this.hours.setText(val);
    }
    this.getMin = ()=>{
        return this.mins.getText();
    }
    this.setMin = (val)=>{
        this.mins.setText(val);
    }
    this.getZoneText = ()=>{
        var text = this.zone.options[this.zone.selectedIndex].text;
        return text;
    }
    this.setZoneText = (val)=>{
        var text = this.zone.options[this.zone.selectedIndex].text;
        console.log(this.zone.options);
        for(var i of this.zone.options){
            console.log(i);
            if(i.innerText == val){
                i.setAttribute("selected","selected");
            }
        }
        return text;
    }
    this.getMusicText = ()=>{
        return this.musicspan.innerText;
    }
    this.setMusicText = (val)=>{
        this.musicspan.innerText = val;
    }

    this.update = ()=>{
        this.hours.update();
        this.mins.update();
        this.musicItems.update()
    }
    this.add = ()=>{
        return this.cont;
    }
    this.events = ()=>{
        var musictitleclick = (e)=>{
            //alert("s");
            this.musicItems.addto().classList.toggle("close");
            var mbtn = this.musicItems.addto();
            var l = (e)=>{
                //console.log(e)
                this.musicspan.innerHTML = e.target.previousSibling.data;
            }
            if(mbtn){
                console.log(mbtn);
                var m =this.musicItems.get("button")
                if(m != null){
                    console.log(m);
                    m.forEach((item,key)=>{
                        if(item){
                            item.removeEventListener("click",l);
                            item.addEventListener("click",l);
                        }
                    })
                    // m.addEventListener("click",()=>{
                    //     alert("sd");
                    // })              
                }
               
            }
        }
        this.hours.events();
        this.mins.events();
        this.toogleswitch.addEventListener("click",()=>{
            if(this.tooglecheckbox.checked == false){
                //alert("here");
                this.toogleswitch.classList.add("off");
                this.tooglecheckbox.checked = true;
            }else{
                this.toogleswitch.classList.remove("off");
                this.tooglecheckbox.checked = false;
            }
        })
        if(this.musicspan){
            this.musicspan.removeEventListener("click",musictitleclick);
            this.musicspan.addEventListener("click",musictitleclick);
        }
       

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

a.getmusiclist();
a.setHour(6);
a.setMin(-2);
a.setZoneText("PM");
a.setMusicText("Hello");
// async function run(){
//     console.log( await eel.list_of_music()());
// }
// run();
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