<?php
require 'connect.php';
$id=file_get_contents("php://input");
if(isset($id)&& !empty($id))
{
   // echo($id);
    $req=json_decode($id); //convert to array
   // 
    $d=mysqli_real_escape_string($connexion,trim($req->depenceId));//get Id
    $data=array('id'=>$d);
    echo json_encode($data);
$sql="DELETE FROM depences WHERE depenceId='$d';";
$result=mysqli_query($connexion,$sql);


}
?>