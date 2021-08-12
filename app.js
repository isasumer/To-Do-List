
let date = new Date();
document.getElementById("date").innerHTML = date.toLocaleDateString();

let liste = document.querySelector(".liste")
let urun = document.querySelector("#veri"); 
let button = document.querySelector("#button")

button.addEventListener("click", function(){
  console.log ("basıldı")
    // createElement ile yeni bir listItem (li) oluşturuyoruz
    var li=document.createElement("li"); 
    
    // Input ile gelen veriyi "li" içerisine metin olarak giriyoruz.
    li.textContent=veri.value; 
    
    // appendChild ile oluşturduğumuz elementi "liste" isimli değişkenimizin içerisine ekliyoruz.
    liste.appendChild(li);
                
    // Veri inputu içerisindeki metni siliyoruz.
    veri.value = "";
  });

  let newclass = document.querySelector ("body>div>div>h2")
 
  newclass.classList.add("myDay", "second");
  newclass.classList.remove("second");
 console.log(newclass.classList);