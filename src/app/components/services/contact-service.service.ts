import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {


  private baseUrl:string="https://localhost:7083/api/Contact"

  constructor(private http:HttpClient, private router: Router ) {}



  checkibanexist(iban: any) {
    return this.http.post<any>(`${this.baseUrl}/ibanexist?iban=${iban}`, null);
  }

  getidbyiban(iban:any){
    return this.http.post<any>(`${this.baseUrl}/getidbyiban?iban=${iban}`, null);
  }


  addcontact(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}/addcontact`, userObj)
  }



  getcontact(id:any){
    return this.http.post<any>(`${this.baseUrl}/getcontact?userid=${id}`, null);
  }  



  deleltecontact(id:any){
    return this.http.post<any>(`${this.baseUrl}/deletecontact?contactid=${id}`, null);

  }


}
