var todoinput1=document.querySelector(".input1");
var todobutton1=document.querySelector(".button1");
console.log(todobutton1);
var todolist1=document.querySelector(".list1");
var n=todoinput1.value;

todobutton1.onclick=create;
todolist1.onclick=checkdelete;
   function create(e){
    e.preventDefault();
    var newDiv = document.createElement("div");
    newDiv.classList.add("todo");
    var newLi=document.createElement("li");
    newLi.classList.add("todo-item");
    newLi.innerHTML=todoinput1.value;
    newDiv.appendChild(newLi);

    var checkbtn=document.createElement("button");
    checkbtn.classList.add("check-btn");
    checkbtn.innerHTML='<i class="fa fa-check" ></i>';
    newDiv.appendChild(checkbtn);

    var deletebtn=document.createElement("button");
    deletebtn.classList.add("delete-btn");
    deletebtn.innerHTML='<i class="fa fa-trash" ></i>';
    newDiv.appendChild(deletebtn);

    todolist1.appendChild(newDiv);
}
     function checkdelete(e){
    var item =e.target;
    if(item.classList[0]==="delete-btn"){
        var parent=item.parentNode;
        parent.remove();
    }
    if(item.classList[0]==="check-btn"){
        var parent = item.parentNode;
        parent.classList.toggle("completed");
    }

}