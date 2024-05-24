function checkAnswer() {
    var soruSayisi=3;
    var gelenCevap = new Array();
    var dogruCevap = new Array("D","B","A");
    var dogru=0;
    var yanlis=0;
    var cevap=0;
       
    var userEmail= document.getElementById("userEmail").value;
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        alert("Lütfen mail adresinizi doğru giriniz.");
        return;
    }
    for(i=1; i <= soruSayisi; i++){	
     var secenekler=document.getElementsByName("q"+i);
     for(j=0; j < secenekler.length; j++){
      if(secenekler[j].checked){				
       if(secenekler[j].value==dogruCevap[i-1]){
        cevap=1;
       }else{
       cevap=0;
       }	
        gelenCevap.push(secenekler[j].value);
      }
     }
    }	
     
    var userEmail= document.getElementById("userEmail").value;
    for(k=0; k < soruSayisi; k++){
     if(gelenCevap[k]==dogruCevap[k]){
      dogru++;
     }else{
      yanlis++;
     }
    }
    if(dogru==soruSayisi){
        alert(userEmail+" kampanya için hak kazandınız. Tebrik ederiz.")
        document.getElementById("kampanya").style.display="block";
    }
    else{
        alert(userEmail+" sorulara hatalı cevap verdiğiniz için kampanyadan faydalanamadınız.")
    }
   }