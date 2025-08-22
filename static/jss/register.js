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

let form=document.getElementById("login-form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let confirmPassword=document.getElementById("confirmPassword").value;
    if(name === "" || email === "" || password==="") {
        alert("enter all the details");
        return;
    }
    if(password != confirmPassword) alert("password is not same");
    else{

        let userdata=localStorage.getItem(email);
        if(userdata){
            alert("User already exist")
            window.location.href="login.html";
            return;
        }

        let user={
            name:name,
            email:email,
            password:password,
        };

        localStorage.setItem(email,JSON.stringify(user));
        alert("reister successfull please login");
        window.location.href="login.html"
    }


    
})




// form.addEventListener('submit',(e)=>{
//     e.preventDefault();

//     if(firstname_input==""){
//         displayerror("first name required");
//     }
// })

// function displayerror(error){
//     document.getElementById("div").textContent=error;
// }