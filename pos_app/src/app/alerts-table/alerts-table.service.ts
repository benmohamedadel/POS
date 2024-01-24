import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { Ialert } from '../dashboard-manager/alerts';

@Injectable({
  providedIn: 'root'
})
export class AlertsTableService {
  private readonly  PRODUCT_API_URL2='http://localhost/POS/putAlert.php';
  private readonly   ALERT_API_URL= 'http://localhost/POS/getAlerts.php';
  private readonly   ALERT_API_URL1= 'http://localhost/POS/deleteAlert.php';
  constructor(private http :HttpClient){}
  public alert='';

  ///////////////////////////////////////
  /////////////////////////////////////
public getAlerts():Observable<Ialert[]>{

  return this.http.get<Ialert[]>(this.ALERT_API_URL).pipe(

  catchError(this.handleError));
}
//////////////////////////////////////
deleteAlert(alertId :any) {
  //console.log(productId);
  return this.http.post<Ialert[]>(this.ALERT_API_URL1,{alertId} );
}
//////////////////////////////////
//////////////////////////////////
putAlert(alertDescription:string):Observable<any>{
  return this.http.post<any>(this.PRODUCT_API_URL2,{alertDescription}).pipe(catchError(this.handleError));}





/////////////////////////////////
/////////////////////////////
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
