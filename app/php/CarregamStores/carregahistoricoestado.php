<?php
//error_reporting(0);
include("config.php");

$id = $_COOKIE['cookieID'],


$return_arr = array();

    $query = "SELECT `idHistoricoEstados`,`HoraAtribuicaoEstado`,`IdTicketEstado`,`IDEstadoEstado`,`IDFuncEstado` FROM historicoestados where IdTicketEstado = $id" ;


$result = mysqli_query($mysqli, $query);
while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {

$row_array['idHistoricoEstados'] = $row['idHistoricoEstados'];
$row_array['HoraAtribuicaoEstado'] = $row['HoraAtribuicaoEstado'];
$row_array['IdTicketEstado'] = $row['IdTicketEstado'];
$row_array['IDEstadoEstado'] = $row['IDEstadoEstado'];
$row_array['IDFuncEstado'] = $row['IDFuncEstado'];


    array_push($return_arr,$row_array);
}
echo json_encode($return_arr);

?>