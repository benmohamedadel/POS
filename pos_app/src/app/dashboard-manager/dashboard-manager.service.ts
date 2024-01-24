
import { JsonPipe } from "@angular/common";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { catchError, Observable, tap, throwError } from "rxjs";
import { Iproduct } from "./product";

@Injectable(
  { providedIn :'root'}

)

export class productlistservice


{   private readonly    PRODUCT_API_URL1= 'http://localhost/POS/put_products.php'
    private readonly   PRODUCT_API_URL= 'http://localhost/POS/get_products.php';

    private readonly    PRODUCT_API_URL3="http://localhost/POS/deleteProduct.php";
    private readonly    PRODUCT_API_URL4="http://localhost/POS/edit_product.php";
    private readonly    PRODUCT_API_URL5="http://localhost/POS/putSale.php";
  constructor(private http :HttpClient){}
public getProducts(): Observable<Iproduct[]>{

  return this.http.get<Iproduct[]>(this.PRODUCT_API_URL).pipe(
  catchError(this.handleError));
}
//////////////////////////////
/////////////////////////////

putProducts (
 x:FormData
):Observable<any>{


  return this.http.post(this.PRODUCT_API_URL1,x,{
reportProgress:true,observe:'events'}
    ).pipe(catchError(this.handleError));
}
///////////////////////////////////////////
//////////////////////////////////////////////
changeProduct(productId:number,productName:string,productPrice:number,productQuantity:number,productCategory:string)
{
  return this.http.post<Iproduct[]>(this.PRODUCT_API_URL4,{productId,productName,productPrice,productQuantity,productCategory} );
}
////////////////////////////////////
///////////////////////////////////
putSale( saleDescription:string,salePrice:number)
{
return this.http.post<any>(this.PRODUCT_API_URL5,{saleDescription,salePrice}).pipe(
  catchError(this.handleError));
}


/////////////////////////////////
////////////////////////////////
deleteProduct(productId :any) {
  console.log(productId);
  return this.http.post<Iproduct[]>(this.PRODUCT_API_URL3,{productId} );
}
private handleError(error: HttpErrorResponse  ) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  // Return an observable with a user-facing error message.
  return throwError(() => new Error('Something bad happened; please try again later.'));
}
}




