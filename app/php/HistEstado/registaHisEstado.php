<?php
error_reporting(0);
include("config.php");

$IdTicketEstado = $_COOKIE['cookieID'];
$IdTipoRes = $_POST['IdTipoRes'];
$IDFuncEstadox =  $_COOKIE['cookieEmail'];

<<<<<<< HEAD
$insere = sqlsrv_query($mysqli, "call inserirhistoricoestados2('$IdTicketEstado','$IDFuncEstadox','$IdTipoRes');");

sqlsrv_close($mysqli);
=======
$insere = mysqli_query($mysqli, "call inserirhistoricoestados2('$IdTicketEstado','$IDFuncEstadox','$IdTipoRes');");

mysqli_close($mysqli);
>>>>>>> a24fcc125feea59199f412789f438675a17b8613

?>

