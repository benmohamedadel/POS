import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable,tap, throwError } from 'rxjs';
import { Idepence } from './depences';

@Injectable({
  providedIn: 'root'
})
export class DepencesTableService {
  private readonly   PRODUCT_API_URL= 'http://localhost/POS/getDepences.php';
  private readonly   PRODUCT_API_URL1= 'http://localhost/POS/putDepences.php';
  private readonly   PRODUCT_API_URL2= 'http://localhost/POS/editDepence.php';
  private readonly   PRODUCT_API_URL3= 'http://localhost/POS/deleteDepence.php';
  constructor(private http :HttpClient){}
public getPurchases(): Observable<Idepence[]>{

  return this.http.get<Idepence[]>(this.PRODUCT_API_URL).pipe(tap(depence  =>console.log("depences: ",depence )),catchError(this.handleError));
}
/////////////////////////////////////////////
////////////////////////////////////////////
putDepences(depencePrice:number, depenceDescription:number):Observable<any>{
  return this.http.post<any>(this.PRODUCT_API_URL1,{depencePrice, depenceDescription}).pipe(catchError(this.handleError));}

///////////////////////////////////////////////////
//////////////////////////////////////////////////
changeDepence(depenceId:any,depenceDescription:any,depencePrice:any)
{
  return this.http.post<Idepence[]>(this.PRODUCT_API_URL2,{depenceId,depenceDescription,depencePrice} );
}
//////////////////////////////////////////
///////////////////////////////////////////
deleteDepence(depenceId :any) {
  //  console.log(productId);
    return this.http.post(this.PRODUCT_API_URL3,{depenceId} );}
///////////////////////////////////////////////////
////////////////////////////////////////////////
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
