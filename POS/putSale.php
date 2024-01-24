<?php
require 'connect.php';

$x=file_get_contents("php://input");
if(isset($x)&& !empty($x))
{
    $req=json_decode($x); //convert to array

     //$depencePrice=mysqli_real_escape_string($connexion,trim($req->depencePrice));//get Id
     $salePrice=mysqli_real_escape_string($connexion,trim($req->salePrice));
     $saleDescription=mysqli_real_escape_string($connexion,trim($req->saleDescription));//get alertDescription
$sql="INSERT INTO `sales` ( `saleDescription`,`salePrice`,`saleDate`) VALUES ( '$saleDescription',$salePrice,NOW());";
          
         mysqli_query($connexion,$sql);
}     

?>