import { Component } from "@angular/core";
import { reverse } from "ramda";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"] // un tableau car on peut en ajouter si besoin
})
// le @component décor la classe (lui apporte quelque chose)
export class AppComponent {
  monUrl = "https://google.fr";
  happy: boolean = false;
  title = "Angular est superieur a react";
  mesAnimauxPreferes: Array<string> = ["chat", "lapin"];
  argent: number = 50;
  toto: any = {
    toto: "titi",
    tata: "toao"
  };

  constructor() {
    this.title = reverse("Yuna");
    this.direCoucou();
    setInterval(() => {
      this.happy = !this.happy;
      this.mesAnimauxPreferes = reverse(this.mesAnimauxPreferes);
    }, 1000);
  }
  direCoucou() {
    console.log("coucou");
  }
}
