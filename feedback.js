function submitFeedback(){

let text=document.getElementById("feedbackText").value;

let out=document.getElementById("newRec");

if(text.includes("slow")){

out.innerHTML="Fast Track course recommended.";

}

else if(text.includes("hard")){

out.innerHTML="Beginner friendly course recommended.";

}

else{

out.innerHTML="Feedback recorded.";

}

}
