<?php
require 'connect.php';


  

 $sql="SELECT* FROM depences ";
 $products=[];
 $cr=0;
 $result= mysqli_query($connexion,$sql);
 if($result)
 {
 while($row=mysqli_fetch_assoc($result)){
$products [$cr]['depenceId']=$row['depenceId'];
$products [$cr]['depenceDescription']=$row['depenceDescription'];
$products [$cr]['depenceDate']=$row['depenceDate'];
$products [$cr]['depencePrice']=$row['depencePrice'];
//$products [$cr]['purchaseQuantity']=$row['purchaseQuantity'];

    $cr++;
}

 echo json_encode($products);}
 else{
    http_response_code(404);
 }
    ?>