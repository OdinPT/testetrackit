<?php
error_reporting(0);
include("config.php");

$IdTicketEstado = $_COOKIE['cookieID'];
$IDEstadoEstado = $_POST['ID_Estado'];
$IDFuncEstadox =  $_COOKIE['cookieEmail'];

$insere = mysqli_query($mysqli, "call inserirhistoricoestados('$IdTicketEstado','$IDEstadoEstado','$IDFuncEstadox');");

mysqli_close($mysqli);

?>

