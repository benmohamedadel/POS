<?php
require 'connect.php';

$x=file_get_contents("php://input");
if(isset($x)&& !empty($x))
{
    $req=json_decode($x); //convert to array
    // 
     $id=mysqli_real_escape_string($connexion,trim($req->productId));//get Id
     $Name=mysqli_real_escape_string($connexion,trim($req->productName));//get productName
     $price=mysqli_real_escape_string($connexion,trim($req->productPrice));//get productPrice
     $Quantity=mysqli_real_escape_string($connexion,trim($req->productQuantity));//get productPrice
     $Category=mysqli_real_escape_string($connexion,trim($req->productCategory));//get productPrice
    
     $data=array('id'=>$id,'idd'=>$Name,'iddd'=>$price,'idddd'=>$Category,'iddddd'=>$Quantity);
     echo json_encode($data);
     if($id&&$Name&&$price&& $Quantity&&$Category)
     {
        $sql="UPDATE products
        SET productName='$Name', productPrice='$price',productQuantity='$Quantity',productCategory='$Category'
        WHERE productId='$id' ;
        ";
        mysqli_query($connexion,$sql);

     }
     

}
?>