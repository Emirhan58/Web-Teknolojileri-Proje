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


