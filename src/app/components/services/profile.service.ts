import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  private baseUrl:string="https://localhost:7083/api/User/"

  constructor(private http:HttpClient, private router: Router ) {}




  getinfo(id: any) {
    return this.http.post<any>(`${this.baseUrl}geinfo`, id)
  }


  checkadresseexist(id:any){

    return this.http.post<any>(`${this.baseUrl}getadress`, id)
  }

  addadresse(id:any){

    return this.http.post<any>(`${this.baseUrl}addadresse`, id)
  }


  updateinfo(info:any){

    return this.http.post<any>(`${this.baseUrl}updateprofile`, info)
  }



}
