<?php
require 'connect.php';

$x=file_get_contents("php://input");
if(isset($x)&& !empty($x))
{
    $req=json_decode($x); //convert to array
    // purchaseId, productId, purchasePrice,purchaseQuantity,purchaseDescription,purchaseDate
     //$purchaseId=mysqli_real_escape_string($connexion,trim($req->purchaseId));//get Id
     $productId=mysqli_real_escape_string($connexion,trim($req->productId));//get Id
     $purchasePrice=mysqli_real_escape_string($connexion,trim($req->purchasePrice));//get productName
     $purchaseQuantity=mysqli_real_escape_string($connexion,trim($req->purchaseQuantity));//get productPrice
     $purchaseDescription=mysqli_real_escape_string($connexion,trim($req->purchaseDescription));//get productPrice

     $sql="SELECT* FROM products WHERE productId='$productId';";
     $result=mysqli_query($connexion,$sql);
     $num=mysqli_num_rows($result); 
     if( $num>0){
         $data=array('message'=>'success','productId'=>$productId);
         echo json_encode($data);
         
         $sql0="UPDATE products 
         SET  productQuantity ='$purchaseQuantity'+productQuantity where productId='$productId';";
         mysqli_query($connexion,$sql0);
       
         
         
         
         $sql=" INSERT INTO `purchases` (  `purchaseDescription`, `purchasePrice`, `purchaseQuantity`, `date`) VALUES ('$purchaseDescription',$purchasePrice,$purchaseQuantity,NOW());
         ";  mysqli_query($connexion,$sql);
          //$data=array('productId'=>$productId,'purchasePrice'=>$purchasePrice,'purchaseQuantity'=>$purchaseQuantity,'purchaseDescription'=>$purchaseDescription);
          //echo json_encode($data);
        /*  $sql="INSERT INTO `purchases` ( `productId`, `purchaseDescription`, `purchasePrice`, `purchaseQuantity`, `date`) VALUES ($productId,'$purchaseDescription',$purchasePrice, '$purchaseQuantity',NOW());
          ";
          mysqli_query($connexion,$sql);*/
     }
     else
     {  $data=array('message'=>'failed');
         echo json_encode($data);
     }
    // $purchaseDate=mysqli_real_escape_string($connexion,trim($req->purchaseDate));//get productPrice
   

}
?>