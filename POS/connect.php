
    <?php 
   
   header(" Access-Control-Allow-Origin");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Authorization,X-PINGOTHER, Content-Type, Accept");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: PUT, POST, OPTIONS");
    header('Content-Type:application/json charset=utf-8');
    Header ('Access-Control-Max-Age: 1000');
    
    

    
$server="localhost"; 
  $login="root";
  $pass="";
  $dbname="pos_project";
  $connexion=new mysqli($server, $login,$pass,$dbname);
 if($connexion->connect_error)
 {
    die('Error:('.$connexion->connect_errno.')'.$connexion->connect_error);
 }
  ?>