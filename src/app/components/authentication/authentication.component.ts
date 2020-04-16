import { Component, OnInit, Input } from "@angular/core";
import { Login } from "../../../models/Login";
import { Register } from "src/models/Register";
import { AuthenticationService } from "../../services/authentication.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";

@Component({
  selector: "app-authentication",
  templateUrl: "./authentication.component.html",
  styleUrls: ["./authentication.component.css"],
})
export class AuthenticationComponent implements OnInit {
  @Input() toggle: string;
  toggleParent: boolean = false;

  initialToggle: boolean = true;

  loginData: Login = {
    emailID: "",
    password: "",
  };

  error: boolean = false;

  registerLoginData: Register = {
    userName: "",
    emailID: "",
    password: "",
  };

  confirmPassword: string;

  constructor(
    private authentication: AuthenticationService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.toggle === "register") {
      if (
        this.registerLoginData.emailID === "" ||
        this.registerLoginData.password === "" ||
        this.registerLoginData.userName === "" ||
        this.confirmPassword != this.registerLoginData.password
      ) {
        this.flashMessage.show("Registeration Failed", {
          cssClass: "alert-danger",
          timeout: 2000,
        });
      } else {
        this.authentication.register(this.registerLoginData).subscribe(
          (data) => {
            if (data.success) {
              this.flashMessage.show("Registered Successfully", {
                cssClass: "alert-success",
                timeout: 2000,
              });
              this.toggle = "login";
            }
          },
          (error) => {
            this.flashMessage.show("Registeration Failed", {
              cssClass: "alert-danger",
              timeout: 2000,
            });
          }
        );
      }
    } else {
      if (this.loginData.emailID === "" || this.loginData.password === "") {
        this.flashMessage.show("Wrong Username/Password", {
          cssClass: "alert-danger",
          timeout: 2000,
        });
      } else {
        this.authentication.login(this.loginData).subscribe(
          (data) => {
            if (data.success) {
              this.flashMessage.show("Logged In Successfully", {
                cssClass: "alert-success",
                timeout: 2000,
              });
              localStorage.setItem("token", data.outputObj.token);

              setTimeout(() => {
                this.toggle = "";
                this.router.navigate(["/images"]);
              }, 1000);
            }
          },
          (error) => {
            this.flashMessage.show("Wrong Username/Password", {
              cssClass: "alert-danger",
              timeout: 2000,
            });
          }
        );
      }
    }
  }
}
