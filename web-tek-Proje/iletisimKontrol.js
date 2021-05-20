function isValid(formum) {
    
    var isim = formum.isim.value;
    var soyisim = formum.soyisim.value;
    var email = formum.email.value;
    var sehir = formum.sehir.value;
    var oneri = formum.oneri.value;

    var cinsiyetler = document.getElementsByName("cinsiyet");
    var cinsiyet = "";
    for(var i=0;i<cinsiyetler.length;i++) {
        if (cinsiyetler[i].checked) {
            cinsiyet = cinsiyetler[i].value;
        }
    }

    var atIndex = email.indexOf("@");
    var dotIndex = email.lastIndexOf(".");

    var bosluk = "";
    switch(bosluk) {
        case isim:
            alert("İsim alanının doldurulması zorunludur!");
            return false;
        case soyisim:
            alert("Soyisim alanının doldurulması zorunludur!");
            return false;
        case email:
            alert("E-Mail alanının doldurulması zorunludur!");
            return false;
        case sehir:
            alert("Şehir seçilmesi zorunludur!");
            return false;
        case cinsiyet:
            alert("Cinsiyet seçilmesi zorunludur!");
            return false;
        case oneri:
            alert("Lütfen öneri kısmını doldurunuz.");
            return false;
        default:
            break;  
    }

    if ( atIndex<1 || dotIndex < atIndex+2 || dotIndex+2 >= email.length )
    {
        alert("Geçerli email adresi girin. ornek@example.com gibi");
        return false;
    }      

    return true;
}