<?php

require_once "vendor/autoload.php";

use App\Entity\User;
use App\Factory\PDOFactory;
use App\Manager\UserManager;

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: authorization, content-type");
header("Content-Type: application/json");
$json = file_get_contents("php://input");
echo json_encode([
    "message" => "comprend pas ",
    // "json" => json_decode($json, true),
    "post" => $_POST
]);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    $user = new User();
    $user->setUsername($username);
    $user->setPassword($password);
    $manager = new UserManager(new PDOFactory());
    $manager->addUser($user);
}

die;
