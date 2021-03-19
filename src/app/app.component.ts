import { Component, VERSION } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  loginForm = new FormGroup({
    username: new FormControl("" , Validators.required),
    password: new FormControl("")
  });

  collectData() {
    console.log(this.loginForm.value);
  }
}
