<?php

$host = "localhost";
$username = "root";
$password = "";
$dbname = "chatbot";

try {
    $conn = mysqli_connect($host , $username , $password , $dbname);

    $userMessage = mysqli_real_escape_string($conn , $_POST['messageValue']);

    $query = "select * from response where message like '%$userMessage%'";
    $runQuery = mysqli_query($conn , $query);

    if (mysqli_num_rows($runQuery) > 0){
        // fetch result
        $result = mysqli_fetch_assoc($runQuery);

        echo $result['response'];
    } else {
        echo "Sorry i can not understand you.";
    }
} catch (Exception $e) {
    echo "Connection error and error code: " . $e;
}
