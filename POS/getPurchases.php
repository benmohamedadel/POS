<?php
require 'connect.php';


  

 $sql="SELECT* FROM purchases ";
 $products=[];
 $cr=0;
 $result= mysqli_query($connexion,$sql);
 if($result)
 {
 while($row=mysqli_fetch_assoc($result)){
$products [$cr]['purchaseId']=$row['purchaseId'];
$products [$cr]['purchaseDescription']=$row['purchaseDescription'];
$products [$cr]['purchaseDate']=$row['date'];
$products [$cr]['purchasePrice']=$row['purchasePrice'];
//$products [$cr]['purchaseQuantity']=$row['purchaseQuantity'];

    $cr++;
}

 echo json_encode($products);}
 else{
    http_response_code(404);
 }
    ?>