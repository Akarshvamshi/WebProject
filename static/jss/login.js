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

let form=document.getElementById("login-form")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    let user=localStorage.getItem(email);

    if(user){
        var parsedData=JSON.parse(user);
        if(parsedData.password==password){
            alert("login sucessfull");
            localStorage.setItem("user",user);
            window.location.href="home.html";
        }
        else{
            alert("password wrong");
        }
    }
    else{
        alert("user not found check the email");
    }
})