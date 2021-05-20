<!DOCTYPE HTML>
<html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>

    <body>
        
        <?php 
            $isim = $_POST["isim"];        
            $soyisim = $_POST["soyisim"];
            $email = $_POST["email"];
            $sehir = $_POST["sehir"];
            $cinsiyet = $_POST["cinsiyet"];
            $oneri = $_POST["oneri"];


            echo "İsim: ".$isim."<br>";
            
            echo "Soyisim: ".$soyisim."<br>";
            echo "E-Mail: ".$email."<br>";
            echo "Şehir: ".$sehir."<br>";
            echo "Cinsiyet: ".$cinsiyet."<br>";
            echo "<br><br>";
            echo "Öneri: ".$oneri;
        ?>
    </body>
</html>