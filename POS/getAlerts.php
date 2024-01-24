<?php
require 'connect.php';


  

 $sql="SELECT* FROM alerts ";
 $products=[];
 $cr=0;
 $result= mysqli_query($connexion,$sql);
 if($result)
 {
 while($row=mysqli_fetch_assoc($result)){
$products [$cr]['alertId']=$row['alertId'];
$products [$cr]['alertDescription']=$row['alertDescription'];
$products [$cr]['alertDate']=$row['alertDate'];

    $cr++;
}

 echo json_encode($products);}
 else{
    http_response_code(404);
 }
    ?>