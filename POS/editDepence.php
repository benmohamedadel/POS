<?php
require 'connect.php';

$x=file_get_contents("php://input");
if(isset($x)&& !empty($x))
{
    $req=json_decode($x); //convert to array
    // 
     $depenceId=mysqli_real_escape_string($connexion,trim($req->depenceId));
     $depenceDescription=mysqli_real_escape_string($connexion,trim($req->depenceDescription));
     $depencePrice=mysqli_real_escape_string($connexion,trim($req->depencePrice));
   
    
     $data=array('depenceId'=>$depenceId,'depenceDescription'=>$depenceDescription,'depencePrice'=>$depencePrice);
     echo json_encode($data);
     $sql="UPDATE depences
     SET depenceDescription='$depenceDescription', depencePrice='$depencePrice',depenceDate=NOW()
     WHERE depenceId='$depenceId' ;
     ";
     mysqli_query($connexion,$sql);

}
?>