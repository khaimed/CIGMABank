import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl:string="  https://localhost:7083/api/User/"

  constructor(private http:HttpClient, private router: Router ) {}
  



  fullname(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}fullname`, userObj)
  }


  Deposite(id:any , amount:any){
 
    return this.http.post<any>(`${this.baseUrl}deposit?id=${id}&Desold=${amount}`, null)
  }

  trasnfer( id:any, iban:any , amount:any){
    return this.http.post<any>(`${this.baseUrl}transaction?id=${id}&iban=${iban}&Desold=${amount}`, null)

  }

  depositeHistory(id:any, type:string, amount:any){
    return this.http.post<any>(`${this.baseUrl}depositeHistory?id=${id}&type=${type}&amount=${amount}`, null)
  }

  TransferHistory(id:any, type:string, amount:any){
    return this.http.post<any>(`${this.baseUrl}depositeHistory?id=${id}&type=${type}&amount=${amount}`, null)
  }

  ibantoid(iban:any){
    return this.http.get<any>(`${this.baseUrl}getuseridbyiban?iban=${iban}`)

  }


  checkemail(id:any){
    return this.http.post<any>(`${this.baseUrl}emailexist?email=${id}`, null)

  }
  deleteuser(id:any){
    return this.http.post<any>(`${this.baseUrl}Deleteuser?iduser=${id}`, null)

  }

  staticsuser(id:any){
    return this.http.post<any>(`${this.baseUrl}staticsuser?userid=${id}`, null)
  }

  alltransfer(id:any){
    return this.http.post<any>(`${this.baseUrl}allTransfer?userid=${id}`, null)
  }

  
  alltransaction(id:any){
    return this.http.post<any>(`${this.baseUrl}allTransaction?userid=${id}`, null)
  }

  adminstatics(){
    return this.http.get<any>(`${this.baseUrl}staticforadmin`)
  }

  usercountstatics(){
    return this.http.get<any>(`${this.baseUrl}usercounts`)

  }

  isitpossibletransfer(id:any , amount:any){
    return this.http.post<any>(`${this.baseUrl}isitPossibleTransaction?userid=${id}&sold=${amount}`, null)
  }

  removesold(id:any , amount:any){
    return this.http.post<any>(`${this.baseUrl}removesoldd?userid=${id}&sold=${amount}`, null)
  }



  allclients(){
    return this.http.get<any>(`${this.baseUrl}allclients`)

  }

  unactiveclients(){
    return this.http.get<any>(`${this.baseUrl}unactiveclients`)
  }

  activeclient(id:any){
    return this.http.post<any>(`${this.baseUrl}activecldient?id=${id}`, null)

  }

  isitactivated(email:any){
    return this.http.post<any>(`${this.baseUrl}isitActivatted?email=${email}`, null)

  }


}
