import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class TokeninterceptorService implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("token");
    let newHeaders = req.headers;
    if (token) {
      newHeaders = newHeaders.append("token", token);
    } else {
      localStorage.clear();
      this.router.navigate(["/"]);
    }
    newHeaders = newHeaders.append("Content-Type", "application/json");
    const authReq = req.clone({ headers: newHeaders });
    return next.handle(authReq);
  }
}
