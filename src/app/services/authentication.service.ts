import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  register(data) {
    return this.http.post<any>(this.baseUrl + "/signUp", data);
  }

  login(data) {
    return this.http.post<any>(this.baseUrl + "/signIn", data);
  }
}
