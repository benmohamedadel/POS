<?php
require 'connect.php';
$login_manager=file_get_contents("php://input");
if(isset($login_manager)&& !empty($login_manager))
{
    $req=json_decode($login_manager); //convert to array
$email=mysqli_real_escape_string($connexion,trim($req->email));//get email
$password=mysqli_real_escape_string($connexion,trim($req->password));
 $sql="SELECT* FROM MANAGERS WHERE email='$email' and password='$password'";

if($result=mysqli_query($connexion,$sql))
{
$num =mysqli_num_rows($result); 
if($num>0){
    $data=array('message'=>'success','email'=>$email);
    echo json_encode($data);
}
else
{  $data=array('message'=>'failed');
    echo json_encode($data);
}
}}
 ?>