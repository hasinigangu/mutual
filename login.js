function loginUser(){

let u=document.getElementById("username").value;

let p=document.getElementById("password").value;

if(u==""||p==""){

alert("Enter credentials");

return;

}

alert("Login Successful");

window.location.href="index.html";

}
