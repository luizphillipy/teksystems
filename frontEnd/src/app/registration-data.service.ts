import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Registration} from "./student/student.component";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegistrationDataService {
  #baseUrl:string="http://localhost:3003/api/";


  constructor(private http:HttpClient) { }

  public createRegistration(registration:Registration):Observable<any>{
    console.log("Create registration service requested");
    const url:string=this.#baseUrl+"registrations";
    return this.http.post(url, registration);
  }
  public getRegistrations(offset:Number, condition:String):Observable<any>{
    console.log("get registration service requested");
    const url:string=this.#baseUrl+"registrations";
    return this.http.get(<any>(url));

  }
}
