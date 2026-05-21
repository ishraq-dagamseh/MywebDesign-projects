<?php

if ($_SERVER["REQUEST_METHOD"]=="POST"){

    //Get the form value
    $name= $_POST["fname"];
    //chech if empty
    if(empty($name)){
        echo "Name is required!";}
    else
       { echo "Hello " . htmlspecialchars($name);
    }}

    ?>