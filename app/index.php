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
    // Create token header as a JSON string
    $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);

    // Create token payload as a JSON string
    $payload = json_encode(['userId' => 123]);

    // Encode Header to Base64Url String
    $base64UrlHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));

    // Encode Payload to Base64Url String
    $base64UrlPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payload));

    // Create Signature Hash
    $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, 'abC123!', true);

    // Encode Signature to Base64Url String
    $base64UrlSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));

    // Create JWT
    $jwt = $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;

    echo " " . $signature . " " . $base64UrlSignature;
}
die;
