<?php
error_reporting(0);
include("config.php");
$id = $_COOKIE['cookieID'];
$return_arr = array();

    $query = "Call ShowRespostasTicket($id)";

$result = sqlsrv_query($mysqli, $query);
while ($row = sqlsrv_fetch_array($result, SQLSRV_ASSOC)) {

$row_array['id_resp'] = $row['id_resp'];
$row_array['subject_resp'] = $row['subject_resp'];
$row_array['body_resp'] = $row['body_resp'];
$row_array['datea_resp'] = $row['datea_resp'];
$row_array['id_email'] = $row['id_email'];

    array_push($return_arr,$row_array);
}
echo json_encode($return_arr);

?>
