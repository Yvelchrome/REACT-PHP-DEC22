<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: authorization");
header("Content-Type: application/json");
$json = file_get_contents("php://input");

echo json_encode([
    "toto" => "f u steven",
    "json" => json_decode($json, true),
    "post" => $_POST
]);

die;
