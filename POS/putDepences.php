<?php
require 'connect.php';

$x=file_get_contents("php://input");
if(isset($x)&& !empty($x))
{
    $req=json_decode($x); //convert to array

     $depencePrice=mysqli_real_escape_string($connexion,trim($req->depencePrice));//get Id
     $depenceDescription=mysqli_real_escape_string($connexion,trim($req->depenceDescription));//get productPrice
$sql="INSERT INTO `depences` ( `depenceDescription`, `depencePrice`, `depenceDate`) VALUES ( '$depenceDescription',$depencePrice,NOW());";
          
          if(mysqli_query($connexion,$sql))
          {
            $data=array('message'=>'success');
    echo json_encode($data);
          }
     }
   
   


?>