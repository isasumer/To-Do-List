
let date = new Date();
document.getElementById("date").innerHTML = date.toLocaleDateString();

let list = document.querySelector("#list")
let input = document.querySelector("#input"); 
let button = document.querySelector("#button")

let i=0;
button.addEventListener("click", function(){
  var checkbox = document.createElement('input');

  checkbox.type = "checkbox";
  checkbox.name = "name";
  checkbox.value = "value";
  checkbox.id = "id";

  list.appendChild(checkbox);

  const color = ['primary', 'secondary', 'success', 'danger', 'warning', 'info']
  
      let li = document.createElement('li');

      li.classList.add('list-group-item');
      li.classList.add('list-group-item-'+color[i%7]);
      li.textContent=input.value;       
      list.appendChild(li);
      input.value = "";
      i++;
  //creating checkbox element
             
  // Assigning the attributes
  // to created checkbox

  });

  let newclass = document.querySelector ("body>div>div>h2")
 
  newclass.classList.add("myDay", "second");
  newclass.classList.remove("second");
 console.log(newclass.classList);