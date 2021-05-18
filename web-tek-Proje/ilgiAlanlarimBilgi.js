async function getirFilmler($parametre1, $parametre2){
	var sirala = document.getElementById("filmler")
    var sira = 0
    let data = fetch("https://api.themoviedb.org/3/trending/all/day?api_key=f45e0c137d557b89de1e46a3edc13dc1")
    .then(Response => Response.json())
    .then(veri => {
        
        veri["results"].forEach(element => {
            if(sira<10) {
                var isim = element["title"]
                if (element["title"] == null) {
                    isim = element["name"]
                }
                filmler.innerHTML += `<li>${isim}</li>`
            }
            sira++
        });
    })
}

async function getirKhabib($parametre1, $parametre2){
	var sirala = document.getElementById("khabib")
    let data = fetch("https://fly.sportsdata.io/v3/mma/scores/json/Fighter/140000601?key=69a810de01da4d26bbfb47dfb059426b")
    .then(Response => Response.json())
    .then (veri => {
        var lakap = veri["Nickname"]
        var siklet = veri["WeightClass"]
        var dogumTarihi = veri["BirthDate"]
        var kazanma = veri["Wins"]
        var kaybetme = veri["Losses"]
        var berabere = veri["Draws"]
        var teknikNakavtKazanma = veri["TechnicalKnockouts"]
        var teknikNakavtKaybetme = veri["TechnicalKnockoutLosses"]

        khabib.innerHTML += `<p>Lakap: ${lakap}</p>`
        khabib.innerHTML += `<p>Doğum Tarihi: ${dogumTarihi}</p>`
        khabib.innerHTML += `<p>Siklet: ${siklet}</p>`
        khabib.innerHTML += `<p>Kazandığı maç sayısı: ${kazanma}</p>`
        khabib.innerHTML += `<p>Kaybettiği maç sayısı: ${kaybetme}</p>`
        khabib.innerHTML += `<p>Berabere kaldığı maç sayısı: ${berabere}</p>`
        khabib.innerHTML += `<p>Nakavtla kazandığı maç sayısı: ${teknikNakavtKazanma}</p>`
        khabib.innerHTML += `<p>Nakavtla kaybettiği maç sayısı: ${teknikNakavtKaybetme}</p>`
    })
}

async function getirMcGregor($parametre1, $parametre2){
	var sirala = document.getElementById("McGregor")
    let data = fetch("https://fly.sportsdata.io/v3/mma/scores/json/Fighter/140000867?key=69a810de01da4d26bbfb47dfb059426b")
    .then(Response => Response.json())
    .then (veri => {
        var lakap = veri["Nickname"]
        var siklet = veri["WeightClass"]
        var dogumTarihi = veri["BirthDate"]
        var kazanma = veri["Wins"]
        var kaybetme = veri["Losses"]
        var berabere = veri["Draws"]
        var teknikNakavtKazanma = veri["TechnicalKnockouts"]
        var teknikNakavtKaybetme = veri["TechnicalKnockoutLosses"]

        McGregor.innerHTML += `<p>Lakap: ${lakap}</p>`
        McGregor.innerHTML += `<p>Doğum Tarihi: ${dogumTarihi}</p>`
        McGregor.innerHTML += `<p>Siklet: ${siklet}</p>`
        McGregor.innerHTML += `<p>Kazandığı maç sayısı: ${kazanma}</p>`
        McGregor.innerHTML += `<p>Kaybettiği maç sayısı: ${kaybetme}</p>`
        McGregor.innerHTML += `<p>Berabere kaldığı maç sayısı: ${berabere}</p>`
        McGregor.innerHTML += `<p>Nakavtla kazandığı maç sayısı: ${teknikNakavtKazanma}</p>`
        McGregor.innerHTML += `<p>Nakavtla kaybettiği maç sayısı: ${teknikNakavtKaybetme}</p>`
    })
}

async function getirCsGoTakimlar($parametre1, $parametre2){ 
    var sirala = document.getElementById("csGoTakimlar")
    var sira = 0
    let data = fetch("https://fly.sportsdata.io/v3/csgo/scores/json/Teams?key=497203afe23f4aac951ee6548d079912")
    .then(Response => Response.json())
    .then (veri => {
        veri.forEach(takim => {
            if (sira < 20) {
                var isim = takim["Name"]
                csGoTakimlar.innerHTML += `<li>${isim}</li>`
            }
            sira++
        });
    })
}

getirFilmler();
getirKhabib();
getirMcGregor();
getirCsGoTakimlar();