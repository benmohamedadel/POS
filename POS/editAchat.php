<?php
require 'connect.php';

$x=file_get_contents("php://input");
if(isset($x)&& !empty($x))
{
    $req=json_decode($x); //convert to array
    // 
     $achatId=mysqli_real_escape_string($connexion,trim($req->purchaseId));
     $achatDescription=mysqli_real_escape_string($connexion,trim($req->purchaseDescription));
     $achatPrice=mysqli_real_escape_string($connexion,trim($req->purchasePrice));
   
    
     $data=array('achatId'=>$achatId,'achatDescription'=>$achatDescription,'achatPrice'=>$achatPrice);
     echo json_encode($data);
     if($achatId&&$achatDescription&&$achatPrice)
     {
        $sql="UPDATE purchases
     SET purchaseDescription='$achatDescription', purchasePrice='$achatPrice',`date`=NOW()
     WHERE achatId='$achatId' ;
     ";
     }
     
     mysqli_query($connexion,$sql);

}
?>