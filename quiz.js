let questions=[

{q:"Which subject do you want to improve?",options:["Math","Programming","Physics","Chemistry"]},

{q:"Preferred learning style?",options:["Videos","Practice","Projects","Reading"]},

{q:"Your level?",options:["Beginner","Intermediate","Advanced"]}

];

let current=0;
let answers=[];

function loadQuestion(){

let q=questions[current];

document.getElementById("question").innerText=q.q;

let html="";

q.options.forEach(o=>{
html+=`<button onclick="selectOption('${o}')">${o}</button>`;
});

document.getElementById("options").innerHTML=html;
}

function selectOption(o){

answers.push(o);

current++;

if(current<questions.length){

loadQuestion();

}
else{

localStorage.setItem("answers",JSON.stringify(answers));

window.location.href="recommendation.html";

}

}

loadQuestion();
