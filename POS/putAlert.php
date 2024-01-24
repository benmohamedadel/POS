<?php
require 'connect.php';

$x=file_get_contents("php://input");
if(isset($x)&& !empty($x))
{
    $req=json_decode($x); //convert to array

     //$depencePrice=mysqli_real_escape_string($connexion,trim($req->depencePrice));//get Id
     $alertDescription=mysqli_real_escape_string($connexion,trim($req->alertDescription));//get alertDescription
$sql="INSERT INTO `alerts` ( `alertDescription`,  `alertDate`) VALUES ( '$alertDescription',NOW());";
          
         mysqli_query($connexion,$sql);
}     

?>