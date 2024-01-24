
 <?php 

create table managers(
         id int primary key AUTO_INCREMENT,id_project int references projects(projectId), 
         f_name varchar(30),
         l_name varchar(30),
         email varchar(30),
         password varchar(30));
create table Admin(
          id int primary key AUTO_INCREMENT,id_project int references projects(projectId),
          f_name varchar(30),
          l_name varchar(30),
          email varchar(30),
          password varchar(30));

create table products(
         productId int primary key AUTO_INCREMENT,id_project int references projects(projectId),
         productName varchar(50),
         productCategory varchar(30),
        productQuantity  float,
         productPrice float,
        productImage varchar(100));
create table alerts  ( 
                      alertId  int primary key AUTO_INCREMENT,id_project int references projects(projectId),
                      alertDescription varchar(200),
                       alertDate Date);
create table sales(
          saleId  int primary key AUTO_INCREMENT,id_project int references projects(projectId),
          salePrice float ,
          saleDescription varchar(200),
          saleDate Date);
create table purchases  ( 
                      purchaseId  int primary key  AUTO_INCREMENT,id_project int references projects(projectId),
                      purchaseDescription varchar(200),
                      purchasePrice float,
                      purchaseQuantity int ,
                      date Date
);
create table depences  ( 
                      depenceId  int primary key AUTO_INCREMENT,id_project int references project(projectId),
                      depenceDescription varchar(200),
                      depencePrice float,
                      depenceDate varchar(20)
);

create table history  ( 
                      id  varchar(20) primary key,id_project int references project(projectId),
                      Description varchar(200),
                       date varchar(20));



create table projects(
projectId  int primary key,
projectName varchar(20),
 adminId int references admin(id)

);
 
?>

