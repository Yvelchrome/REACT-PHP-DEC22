<?php

namespace App\Manager;

use App\Entity\User;
use PDO;


class UserManager extends BaseManager
{
    /**
     * @return User[]
     */
    public function getAllUsers(): array
    {
        $query = $this->pdo->query("select * from User");

        $users = [];

        while ($data = $query->fetch(PDO::FETCH_ASSOC)) {
            $users[] = new User($data);
        }

        return $users;
    }

    public function addUser(User $user): ?User
    {
        $insert = $this->pdo->prepare("INSERT INTO User (username, password) VALUES(:username, :password)");
        $insert->bindValue("username", $user->getUsername(), PDO::PARAM_STR);
        $insert->bindValue("password", $user->getPassword(), PDO::PARAM_STR);
        $insert->execute();

        return $user;
    }

    public function checkUser(User $user): ?User
    {
        $checking = $this->pdo->prepare("SELECT * FROM User WHERE username = :username and password = :password");

        $checking->bindValue("username", $user->getUsername(), PDO::PARAM_STR);
        $checking->bindValue("password", $user->getPassword(), PDO::PARAM_STR);
        $checking->execute();
        $userFetch = $checking->fetch(PDO::FETCH_ASSOC);
        $_SESSION["User"] = $userFetch;

        if ($userFetch) {
            return $user;
        }
        return null;
    }
}
