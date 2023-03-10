let backbutton = document.querySelector("#backbtn");
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