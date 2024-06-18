const inputBox= document.getElementById("input-box")
const listcontainer=document.getElementById(`list-container`)

function addTask(){
    if(inputBox.value===''){
        // This will throw an error if you try to add a task with empty input box
        alert("You must write something!") 
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    //Following code is to refresh the text box after adding the task
    inputBox.value="";
    saveData();
}

listcontainer.addEventListener("click",function(e){
    //this will add checked class name
    if(e.target.tagName==="LI"){
        //if the checked class name already exists this will remove it because of "toggle" 
        e.target.classList.toggle("checked");
        saveData()
    }

    //if you click on span (in this case on the "X") the parent element will be deleted.
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);


//This will store data on your browser (Local Storage)
function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showTask()