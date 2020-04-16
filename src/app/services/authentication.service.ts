import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  baseUrl: string = "http://localhost:5000";

  constructor(private http: HttpClient) {}

  register(data) {
    return this.http.post<any>(this.baseUrl + "/signUp", data);
  }

  login(data) {
    return this.http.post<any>(this.baseUrl + "/signIn", data);
  }
}
