window.onload = tarihSaat;

function tarihSaat() {
     var date = new Date().toLocaleString('tr-TR');
     var div=document.getElementById("whattimeisit");
     if(div){
      div.innerHTML=date;
     }
}
// // her 1 saniyede tarihSaat fonksiyonunu yeniden çalıştır
 setInterval(tarihSaat, 1000);

function toggle() {
  var button = document.getElementById("btn");
  //Arka plan beyaz ve diğer renkler değişir.
  if (button.value == "Renk Değiştir") {    
    button.value = "Renk Değiştirmeyi Geri Al";
    document.getElementById("shopbox").style.backgroundColor = "black";
    var cards=document.getElementsByClassName("card");
    for(var i=0;i<cards.length;i++){
      cards[i].style.backgroundColor="yellow";
    }
 
  } else if (button.value == "Renk Değiştirmeyi Geri Al") {
    button.value = "Renk Değiştir";
    document.getElementById("shopbox").style.backgroundColor = "#404040";
    var cards=document.getElementsByClassName("card");
    for(var i=0;i<cards.length;i++){
      cards[i].style.backgroundColor="#fff";
    }
  }
}
