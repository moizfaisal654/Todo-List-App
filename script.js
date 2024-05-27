window.addEventListener("load",()=>{
    const form=document.querySelector(".form-task")
    const input=document.querySelector(".form-task input")
    const list_el=document.querySelector("#task")
   
    form.addEventListener("submit",(e)=>{
        e.preventDefault()
        const task=input.value;
        if(!task){
            alert("please fill them")
            return
        }
       const task_el=document.createElement("div")
       task_el.classList.add("task")
       const task_content_el=document.createElement("div")
       task_content_el.classList.add("task-content")
       task_el.appendChild(task_content_el)
    //    task_content_el.innerHTML=task
       const task_input_el=document.createElement("input")
       task_input_el.classList.add("text")
       task_input_el.type ="text";
       task_input_el.value = task;
       task_input_el.setAttribute("readonly","readonly")
       task_content_el.appendChild(task_input_el)
       const task_actions=document.createElement("div")
       task_actions.classList.add("actions")
       const task_edit_button=document.createElement("button")
       task_edit_button.classList.add("edit")
       task_edit_button.innerHTML= "Edit"
       const task_delete_button=document.createElement("button")
       task_delete_button.classList.add("delete")
       task_delete_button.innerHTML= "Delete"
       task_actions.appendChild(task_edit_button)
       task_actions.appendChild(task_delete_button)
       task_content_el.appendChild(task_actions)
       list_el.appendChild(task_el)
       input.value=""

       task_edit_button.addEventListener("click",()=>{
           if(task_edit_button.innerText.toLowerCase() == "edit"){
              task_input_el.removeAttribute("readonly")
              task_content_el.focus()
              task_edit_button.innerText="Save"
           }
           else{
              task_input_el.setAttribute("readonly","readonly")
              task_edit_button.innerText="Edit"
           }
       })
       task_delete_button.addEventListener("click",()=>{
        list_el.removeChild(task_el)
       })
    })
})