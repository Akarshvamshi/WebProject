let user=JSON.parse(localStorage.getItem("user"));
// console.log(user);
let email=user.email;
document.getElementById("h1").textContent=`
${user.name} Your task list`


function deleteTask(id){
    console.log(id);
    
    fetch(`http://localhost:3000/toDoList/${id}`,{
        method:"DELETE"
    }).then(()=> displayTasks()).catch(err=>{
        console.log("not found");
        
    });

}

let form=document.getElementById("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let id=user.email;
    let task=document.getElementById("task-input").value;
    if(!task){
        return;
    }
    // console.log(task);
    
    let obj={
        userid:id,
        task:task,
    }

    fetch("http://localhost:3000/toDoList",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)
    });
    displayTasks();
})

function displayTasks(){
    // console.log(email);
    let container=document.getElementById("tasks");
    container.innerHTML="";
    fetch(`http://localhost:3000/toDoList?userid=${email}`).then((value)=>{
       return value.json()
    }).then((tasks)=>{
        tasks.forEach(task => {
            let id=task.id;
            
            
            container.innerHTML+=`<div>
            <p>${task.task}</p>
            <button onclick="deleteTask('${id}')">Delete</button>
            </div>
            `
        });
    })
}

displayTasks();

document.getElementById("logout").addEventListener('click',(e)=>{
    window.location.href='login.html';
    localStorage.removeItem("user");
})