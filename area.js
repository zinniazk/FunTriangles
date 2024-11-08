const base=document.querySelector("#base");
const height=document.querySelector("#height");

const area=document.querySelector("#chkarea");
const answer = document.querySelector("#answer");

area.addEventListener("click",areavalue);

function areavalue(){
    let areavalue=(base.value*height.value);

    answer.innerHTML = "The area is "+ (0.5*areavalue);
    

}
