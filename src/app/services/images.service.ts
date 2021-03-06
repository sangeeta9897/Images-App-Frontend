import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ImagesService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getImages() {
    return this.http.get<any>(this.baseUrl + "/getImages");
  }
}
