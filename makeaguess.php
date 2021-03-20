<?php




if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user_name = $_POST['elev'];
    $tlf = $_POST['tlf'];
    $killer = $_POST['mordar'];

    $dbS = "localhost";
    $dbU = "root";
    $dbP = "";
    $dbN = "guess";

    $conn = mysqli_connect($dbS, $dbU, $dbP, $dbN);

    $query = "INSERT INTO guess (elev_navn, elev_tlf, mordar) VALUES ('$user_name', '$tlf', '$killer')";
    mysqli_query($conn, $query);
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bibliotek Mordet | Make A Guess</title>
    <link rel="stylesheet" href="style/index.css">
</head>
<body>
<header>
        <div class="header-logo">
            <h1 id="gae"><a href="#">BIBLIOTEK MORDET</a></h1>
        </div>
        <nav class="navbar-container" id="ignore" class="ignore">
            <ul id="navbar">
                <a href="./index.html">
                    <li>HOVUDSIDE</li>
                </a>
                <a href="./info.html">
                    <li>BEVIS</li>
                </a>
                <a href="./sus.html">
                    <li>MISTENKTE</li>
                </a>
            </ul>
        </nav>
        <div id="nav-toggle-img-container">
            <div id="navbar-heading" style="visibility: hidden;"><h2 id="text-lol">MENY</h2></div>
            <div id="flex">
                <img src="img/hamb-ico.png" id="toggle-btn" alt="" class="nav-toggle-img" onclick="toggle()">
            </div>
        </div>
    </header>
    <main id="main">
        <div id="php-header-container">
            <h2>Gjett kven som er morderen!</h2>
        </div>
        <div id="form-container">
        <p>Her kan du gjette kven som drepte Ann Helen. <br>Du kan sende inn berre eit svar (berre eit svar blir lagra). <br></p>
        <form method="POST" id='form-div'>

            <input type="text" name="elev" placeholder='Ditt navn'>

            <input type="text" name="tlf" placeholder='Ditt tlf. nummer'>
            <input type="text" name="mordar" placeholder='Navn på mordaren'>

            <input type="submit" placeholder="Send inn" id='send-btn'>

        </form>
        </div>
    </main>
    <script src="./nav2.js"></script>
</body>
</html>