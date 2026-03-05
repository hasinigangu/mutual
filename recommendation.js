let answers=JSON.parse(localStorage.getItem("answers"));

let subject=answers[0];

let result=document.getElementById("result");

if(subject==="Math"){

result.innerHTML=`Math Foundation<br>
<a href="https://www.youtube.com/results?search_query=class+9+math">Watch Videos</a>`;

}

else if(subject==="Programming"){

result.innerHTML=`Python Beginner Course<br>
<a href="https://www.youtube.com/results?search_query=python+for+beginners">Watch Videos</a>`;

}

else{

result.innerHTML="Concept based learning videos recommended.";

}
