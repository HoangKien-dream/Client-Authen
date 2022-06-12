import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8080/api/v1/user';
const authUrl = 'http://localhost:8080/api/v1/auth';
const token = localStorage.getItem("vodung")
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
     'Authorization':`Bearer ${token}`})
};
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }
  login(data:any):Observable<any>{
    return this.http.post(`${baseUrl}/login`, data)
  }
  getConsentScreen(id:any):Observable<any>{
    return this.http.get(`${baseUrl}/auth?id=${id}`)
  }
  getAuthentication(id:any,scope:any):Observable<any>{
    return this.http.get(`${authUrl}?clientId=${id}&scope=${scope}`)
  }
  getToken(code:any,id:any,secret:any):Observable<any>{
    return this.http.get(`${authUrl}/token?code=${code}&clientId=${id}&clientSecret=${secret}`)
  }
  getList(){
    return this.http.get(`${baseUrl}/list`,httpOptions)
  }
  getProfile(){
    return this.http.get(`${baseUrl}/profile`,httpOptions)
  }
}
