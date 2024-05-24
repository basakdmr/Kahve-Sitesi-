function getUrunler() {
  var urunler = (this.urunler = [
    {
      id: 1,
      imgUrl: "img/SBUX-26_720x720.png",
      fiyat: 80.00,
      adi: "Iced Nut Latte",
    },
    {
      id: 2,
      imgUrl: "img/SBUX-176_720x720.png",
      fiyat: 60.00,
      adi: " Chocolate Mocha ",
    },
    {
      id: 3,
      imgUrl: "img/SBUX-51_720x720.png",
      fiyat: 50.00,
      adi: "Chocolate Frappuccino",
    },
    {
      id: 4,
      imgUrl: "img/white-chocolate-mocha.png",
      fiyat: 90.00,
      adi: "Caramel Macinato",
    },
    {
      id: 5,
      imgUrl: "img/flat-white.png",
      fiyat: 75.00,
      adi: "Flat White",
    },
    {
      id: 6,
      imgUrl: "img/caffe-mocha.png",
      fiyat: 85.00,
      adi: "Caffe Mocha",
    },
    {
      id: 7,
      imgUrl: "img/caramel-macchiato.png",
      fiyat: 45.00,
      adi: "Caramel Macchiato",
    },
    {
      id: 8,
      imgUrl: "img/ice-latte.png",
      fiyat: 65.00,
      adi: "İce Latte",
    },
    {
      id: 9,
      imgUrl: "img/SBUX-6_720x720.png",
      fiyat: 55.00,
      adi: "Ristretto Bianco",
    },
    {
      id: 10,
      imgUrl: "img/SBUX-29_720x720.png",
      fiyat:35.00,
      adi: "Cold Brew",
    },
  ]);
  return urunler;
}

window.onload = function () {
  var shopBox = document.getElementById("shopbox");
  var urunler = getUrunler();
  var sepet = [];
  for (let i = 0; i < urunler.length; i++) {
    var item = document.createElement("div");
    item.className = "İtem-1";
    item.style.marginTop = "10px";
    var card = document.createElement("div");
    card.className = "card";
    var cardImage = document.createElement("div");
    cardImage.className = "card-image";
    var img = document.createElement("img");
    img.src = urunler[i].imgUrl;
    cardImage.appendChild(img);
    card.appendChild(cardImage);

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";
    var label = document.createElement("label");
    label.className = "cash";
    label.innerHTML = urunler[i].fiyat + " TL";
    cardBody.appendChild(label);
    var h3 = document.createElement("h3");
    h3.innerHTML = urunler[i].adi;
    cardBody.appendChild(h3);

    var btn = document.createElement("button");
    btn.className = "shopSepetEkleBtn";
    btn.innerHTML = "Sepete Ekle";
    btn.onclick = function urunEkle() {
      var adetValue = 1;
      var filterSepet = sepet.filter((x) => x.id === urunler[i].id);
      if (filterSepet.length != 0) {
        adetValue += filterSepet[0].adet;
        filterSepet[0].adet = adetValue;
      } else {
        sepet.push({
          id: urunler[i].id,
          urunadi: urunler[i].adi,
          urunFiyati: urunler[i].fiyat,
          adet: adetValue,
        });
      }
      sepeteEkle(sepet);
    };
    cardBody.appendChild(btn);

    card.appendChild(cardBody);
    item.appendChild(card);
    shopBox.appendChild(item);
  }
};

function sepeteEkle(urunler) {
  var table = document.getElementById("sepetEkleTable");
  table.innerHTML = "";
  var tr = document.createElement("tr");
  var td = document.createElement("td");
  td.innerHTML = "Ürün Adı";
  tr.appendChild(td);

  var td = document.createElement("td");
  td.innerHTML = "Fiyat";
  tr.appendChild(td);

  var td = document.createElement("td");
  td.innerHTML = "Adet";
  tr.appendChild(td);

  var td = document.createElement("td");
  td.innerHTML = "Silme";
  tr.appendChild(td);
  table.appendChild(tr);

  var toplam = 0;
  for (let i = 0; i < urunler.length; i++) {
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.innerHTML = urunler[i].urunadi;
    tr.appendChild(td);
    var td = document.createElement("td");
    td.innerHTML = urunler[i].urunFiyati;
    tr.appendChild(td);
    var td = document.createElement("td");
    td.innerHTML = urunler[i].adet;
    tr.appendChild(td);
    var td = document.createElement("td");
    var btn = document.createElement("button");
    btn.className = "shopSepetEkleBtn";
    btn.innerHTML = "Silme";
    btn.onclick = function urunSilme() {
      urunler.splice(i, 1);
      sepeteEkle(urunler);
    };
    td.appendChild(btn);
    tr.appendChild(td);
    table.appendChild(tr);
    toplam += urunler[i].adet * urunler[i].urunFiyati;
  }
  document.getElementById("total").innerHTML = "Toplam: " + toplam;
}
function OdemeYap(frm) {
  debugger;
  var adi = frm.adi.value;
  var soyadi = frm.soyadi.value;
  var email = frm.email.value;
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");

  if (adi.length < 2) {
    document.getElementById("adikontrol").innerHTML =
      "Adınızı 2 karakter az olamaz";
    document.getElementById("adikontrol").style.color = "red";
    return false;
  } else {
    document.getElementById("adikontrol").innerHTML = "Uygundur";
    document.getElementById("adikontrol").style.color = "green";
  }
  if (soyadi.length < 2) {
    document.getElementById("soyadikontrol").innerHTML =
      "Soyadınız 2 karakter az olamaz";
    document.getElementById("soyadikontrol").style.color = "red";
    return false;
  } else {
    document.getElementById("soyadikontrol").innerHTML = "Uygundur";
    document.getElementById("soyadikontrol").style.color = "green";
  }
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    document.getElementById("emailkontrol").innerHTML =
      "Lütfen Uygun email adresi giriniz";
    document.getElementById("emailkontrol").style.color = "red";
    return false;
  } else {
    document.getElementById("emailkontrol").innerHTML = "email uygundur";
    document.getElementById("emailkontrol").style.color = "green";
  }

  var odenecekMiktar = document.getElementById("total").innerHTML;
  odenecekMiktar=odenecekMiktar.replace("Toplam: ","");
  alert(
    "Ödeme ekranına gönderilmiştir." +
      adi +
      " " +
      soyadi +
      " email: " +
      email +
      " Ödenecek Toplam Miktar: " +
      odenecekMiktar.toString()
  );
  return true;
}
