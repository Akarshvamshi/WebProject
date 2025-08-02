let makeVisible=()=>{
    let element=document.getElementById("eye-visible");
    let element1=document.getElementById("eye-invisible");
    let password=document.getElementById("password");
    password.type="text";
    element.style.display="none";
    element1.style.display="block";
}

let makeInVisible=()=>{
    let element=document.getElementById("eye-visible");
    let element1=document.getElementById("eye-invisible");
    let password=document.getElementById("password");
    password.type="password";
    element.style.display="block";
    element1.style.display="none";
}