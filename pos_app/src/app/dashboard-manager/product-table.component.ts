import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../dashboard-manager/product';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  constructor() { }
 /* public products:Iproduct[]=[

    {
      productId: 23541,
      productName: "Expresso",
      quantity:20,
      productPrice: 10,
       productCategory: "Café",
      productUrlimage: "assets/img/images.jpeg"

},
{
  productId: 12548,
  productName: "Americano",

  productPrice:10,
  quantity:30,
  productCategory: "Café",
  productUrlimage: "assets/img/americano-recette-1024x682.jpg"

},
{
productId: 12546,
productName: "Allongé",

productPrice: 10,
quantity:10,
productCategory: "Café",
productUrlimage: "assets/img/téléchargement (1).jpeg"

},
{
productId: 16845,
productName: "Capuccino",

productPrice: 10,
quantity:15,
productCategory: "Café",
productUrlimage: "assets/img/capuccino-1000x630.jpg"

}

  ];*/
  ngOnInit(): void {
  }
public add_product():void{

}
}
