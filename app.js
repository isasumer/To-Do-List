let date = document.querySelector("#date");
date.innerHTML = new Date();

let liste = document.querySelector(".liste")
var urun = document.querySelector("#veri"); 
var ekle = document.querySelector("#ekle")

ekle.addEventListener("click",function(){
    // createElement ile yeni bir listItem (li) oluşturuyoruz
    var li=document.createElement("li"); 
    
    // Input ile gelen veriyi "li" içerisine metin olarak giriyoruz.
    li.textContent=veri.value; 
    
    // appendChild ile oluşturduğumuz elementi "liste" isimli değişkenimizin içerisine ekliyoruz.
    liste.appendChild(li);
                
    // Veri inputu içerisindeki metni siliyoruz.
    veri.value = "";
  });