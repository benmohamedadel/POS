<?php
require 'connect.php';


  

 $sql="SELECT* FROM products ";
 $products=[];
 $cr=0;
 $result= mysqli_query($connexion,$sql);
 if($result)
 {
 while($row=mysqli_fetch_assoc($result)){
$products [$cr]['productId']=$row['productId'];
$products [$cr]['productName']=$row['productName'];
$products [$cr]['productCategory']=$row['productCategory'];
$products [$cr]['productQuantity']=$row['productQuantity'];
$products [$cr]['productPrice']=$row['productPrice'];
$products [$cr]['productImage']=$row['productImage'];
    $cr++;
}

 echo json_encode($products);}
 else{
    http_response_code(404);
 }
    ?>
    