<?php

include_once("conexao.php");

$nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);

$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);

$telefone = filter_input(INPUT_POST, 'telefone', FILTER_SANITIZE_STRING);

$msg = filter_input(INPUT_POST, 'msg', FILTER_SANITIZE_STRING);


echo "nome: $nome <br>";
echo "email: $email <br>";
echo "telefone: $telefone <br>";
echo "msg: $msg <br>";


$resposta = "INSERT INTO clientes(nome, email, telefone, msg) values ('$nome', '$email', '$telefone', '$msg')";
$resultado = mysqli_query($conexao, $resposta);

if (mysqli_insert_id($conexao)) {
    header("Location: index.html");
} else {
    header("Location: index.html");
}


?>