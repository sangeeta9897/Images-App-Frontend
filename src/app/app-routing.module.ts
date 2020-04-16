import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ImagesComponent } from "./components/images/images.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "images", component: ImagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
