<?php
require 'connect.php';



//echo json_encode($_FILES["productImage"]["name"]);
$target_dir = "uploads/";

$x= basename($_FILES["productImage"]["name"]);

$target_file = $target_dir . basename($_FILES["productImage"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(file_exists($target_file)) {
    $msg="sorryy file exist";
$uploadOk = 0;
}
if($_FILES["productImage"]["size"]>500000)
{$msg="too large";
    $uploadOk = 0;

}
if( $uploadOk == 0)
{ 
    echo('{"error":"'.$msg.'"}');

}
else{
    if(move_uploaded_file($_FILES["productImage"]["tmp_name"],$target_file))
    {
       
        $productName=$_REQUEST["productName"];
        $productCategory=$_REQUEST["productCategory"];
        $productPrice=$_REQUEST["productPrice"];
        $productQuantity=$_REQUEST["productQuantity"];
        
        $sql="INSERT INTO `products` (`productName`, `productCategory`, `productQuantity`,`productPrice`, `productImage`) VALUES ( '$productName' , '$productCategory','$productQuantity',$productPrice, '$x');";
        mysqli_query($connexion,$sql);
              
  echo('{"success":"File has been uploaded"}');
    }
    else
    {
        echo('{"error":"sorry there is an error uploading your file"}');  
    }
}












  










    ?>