import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private baseUrl = 'https://dangalnews.revanshrenewable.com/API';

  constructor(private http: HttpClient) { }
 

  getData(params?:any, body?:any) : Observable<any> {
    let url = `/fetch_topnav_category.php`;
    return this.http.get(this.baseUrl + url, body)
  }
  
  getTopNavData( ) : Observable<any> {
    let url = `/fetch_category.php`;
    return this.http.get(this.baseUrl + url)
  }

}
