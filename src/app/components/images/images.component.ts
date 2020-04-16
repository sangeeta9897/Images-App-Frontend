import { Component, OnInit } from "@angular/core";
import { ImagesService } from "../../services/images.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: "app-images",
  templateUrl: "./images.component.html",
  styleUrls: ["./images.component.css"],
})
export class ImagesComponent implements OnInit {
  imagesArray: any = [];
  images: any = [];
  constructor(
    private imageService: ImagesService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit(): void {
    this.getImages();
  }

  getImages() {
    this.imageService.getImages().subscribe(
      (data) => {
        for (let index = 0; index < data.outputObj.length; index++) {
          let dataLength = data.outputObj.length / 4;
          while (dataLength-- && index < data.outputObj.length) {
            this.images.push(data.outputObj[index++]);
          }
          index--;
          this.imagesArray.push(this.images);
          this.images = [];
        }
      },
      (error) => {
        localStorage.clear();
        this.imagesArray = [];
        this.flashMessage.show("Session Expired", {
          cssClass: "alert-danger",
          timeout: 2000,
        });
        setTimeout(() => {
          this.router.navigate(["/"]);
        }, 2000);
      }
    );
  }
}
