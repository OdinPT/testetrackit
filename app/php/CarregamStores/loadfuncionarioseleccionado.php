<?php
include("config.php");
$id = $_COOKIE['cookieIDfuncionario'];

$return_arr = array();

<<<<<<< HEAD
$query = "SELECT `id_funcionario`,`username`,`pass`,`nome_departamento`,Descricao_TipoUtilizador FROM funcionario,departamento,tipoutilizador  where `id_departamento_funcionarios`=id_departamento and Tipo_Funcionario= ID_TipoUtilizador and id_funcionario=$id";
=======
$query = "call CarregaFuncSelec($id)";
>>>>>>> a24fcc125feea59199f412789f438675a17b8613

$result = sqlsrv_query($mysqli, $query);
while ($row = sqlsrv_fetch_array($result, SQLSRV_ASSOC)) {

$row_array['id_funcionario'] = $row['id_funcionario'];
$row_array['usernamefunc'] = $row['username'];
$row_array['nome_departamento'] = $row['nome_departamento'];
$row_array['Descricao_TipoUtilizador'] = $row['Descricao_TipoUtilizador'];


    array_push($return_arr,$row_array);
}

echo json_encode($return_arr);

?>
