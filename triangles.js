const angle1= document.querySelector("#angle1");
const angle2= document.querySelector("#angle2");
const angle3= document.querySelector("#angle3");
const answer= document.querySelector("#answer");
const btn= document.querySelector("#btndegree");


btn.addEventListener("click", istriangle);

function istriangle(){

    let sum = Number(angle1.value) + Number(angle2.value) + Number(angle3.value);
    console.log("Sum" + sum);

    if(sum === 180){
        answer.innerHTML = "It is a triangle";
    }
    else
        answer.innerHTML = "It is not a triangle";

}