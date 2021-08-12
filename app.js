
let date = new Date();
document.getElementById("date").innerHTML = date.toLocaleDateString();

let list = document.querySelector("#list")
let input = document.querySelector("#input"); 
let button = document.querySelector("#button")


button.addEventListener("click", function(){
  // let clickNum=0;
  const color = ['primary', 'secondary', 'success', 'danger', 'warning', 'info']
  
    let li_input=document.createElement("input");
    // li.classList.add("list-group-item-"+color[clickNum])

      let li = document.createElement('li');
      li.classList.add('list-group-item');
      li.classList.add('list-group-item-'+color[4]);
    // Input ile gelen veriyi "li" içerisine metin olarak giriyoruz.
    li.textContent=input.value; 
    
    // appendChild ile oluşturduğumuz elementi "liste" isimli değişkenimizin içerisine ekliyoruz.
    list.appendChild(li);
    // li.appendChild(input)
    // Veri inputu içerisindeki metni siliyoruz.
    input.value = "";
    // clickNum +=1
  });

  let newclass = document.querySelector ("body>div>div>h2")
 
  newclass.classList.add("myDay", "second");
  newclass.classList.remove("second");
 console.log(newclass.classList);