import { Component, OnInit, ViewChild } from "@angular/core";
import { ImagesComponent } from "../images/images.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  toggle: string;
  submitText: string;

  constructor(private router: Router) {}
  ngOnInit(): void {
    if (localStorage.getItem("token")) {
      this.router.navigate(["/images"]);
    }
  }
}
