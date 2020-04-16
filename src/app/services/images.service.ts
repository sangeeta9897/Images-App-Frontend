import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ImagesService {
  baseUrl: string = "http://localhost:5000";

  constructor(private http: HttpClient) {}

  getImages() {
    var token = localStorage.getItem("token");
    console.log(token);
    return this.http.get<any>(this.baseUrl + "/getImages");
  }
}
