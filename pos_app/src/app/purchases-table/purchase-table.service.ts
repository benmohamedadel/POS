import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Ipurchase } from './purchases';

@Injectable({
  providedIn: 'root'
})
export class PurchaseTableService {

      private readonly   PRODUCT_API_URL= "http://localhost/POS/getPurchases.php";
      private readonly   PRODUCT_API_URL1='http://localhost/POS/putPurchases.php';
      private readonly   PRODUCT_API_URL2="http://localhost/POS/DeletePurchase.php";
      private readonly   PRODUCT_API_URL3='http://localhost/POS/editAchat.php';
  constructor(private http :HttpClient){}


  deletePurchase(purchaseId :any) {
  //  console.log(productId);
    return this.http.post(this.PRODUCT_API_URL2,{purchaseId} );}
  /////////////////////////
public getPurchases(): Observable<Ipurchase[]>{

  return this.http.get<Ipurchase[]>(this.PRODUCT_API_URL).pipe(tap(purchase  =>console.log("products: ",purchase)),catchError(this.handleError));
}
/////////////////
/////////////////
changePurchace(purchaseId:any,purchaseDescription:any,purchasePrice:any)
{
  return this.http.post<Ipurchase[]>(this.PRODUCT_API_URL3,{purchaseId,purchaseDescription,purchasePrice} );
}
//////////////////////////////////
putPurchases( productId:number, purchasePrice:number,purchaseQuantity:number,purchaseDescription:string):Observable<any>{
  return this.http.post<any>(this.PRODUCT_API_URL1,{ productId, purchasePrice,purchaseQuantity,purchaseDescription}).pipe(catchError(this.handleError));




}
/////////////////////////
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




