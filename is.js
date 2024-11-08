const qn1=document.querySelectorAll('input[name=qn1]');
const qn2=document.querySelectorAll('input[name=qn2]');
let score=0;
question1 = Array.from(qn1);
question2 = Array.from(qn2);
const btn = document.querySelector("#submitbtn");

const answer = document.querySelector("#answer");

btn.addEventListener("click",quiz);

function quiz(e){
    question1.forEach(item => {
        if (item.checked){
            if(item.value === "90"){
                    score++;
                    console.log("first question is right");
            }
        }
        
    });


    question2.forEach(item => {
        if (item.checked){
            if(item.value === "right"){
                score++;
                console.log("second qu is right");
            }
        }
        
    });

    answer.innerHTML= "Your score is" + score +"/2";
    
    e.preventDefault();
    score=0;
}