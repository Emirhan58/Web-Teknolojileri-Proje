var sirala = document.getElementById("kitaplar")

var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.collectapi.com/book/newBook");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("authorization", "apikey 0fsPWwhPuj4uFZY8dfVGS8:3xPiQrqwgGmlhxhrs3Pts4");

xhr.send(data);