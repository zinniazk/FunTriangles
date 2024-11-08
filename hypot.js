const aside=document.querySelector("#aside");
const bside=document.querySelector("#bside");

const hypot=document.querySelector("#chkhypot");
const answer = document.querySelector("#answer");
hypot.addEventListener("click",hypotenuse);

function hypotenuse(){
    let asidevalue=aside.value*aside.value;
    let bsidevalue=bside.value*bside.value;

    const hypotenuse = Math.sqrt(asidevalue+bsidevalue);

    answer.innerHTML = "The hypotenuse is "+hypotenuse;
    

}
