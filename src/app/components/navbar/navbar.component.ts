import { Component, OnInit, Output, ViewChild, Input } from "@angular/core";
import { AuthenticationComponent } from "../authentication/authentication.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  toggle: string = "register";
  @Input() change: boolean = false;
  constructor(private router: Router) {}
  ngOnInit(): void {
    if (this.change) {
      this.toggle = "";
    }
  }

  login() {
    this.toggle = "login";
  }
  register() {
    this.toggle = "register";
  }

  logout() {
    this.change = false;
    localStorage.clear();
    this.router.navigate(["/"]);
  }
}
