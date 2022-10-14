import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupName } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor() { }

  ngOnInit(): void {
  }
  registration= new FormGroup({
    studentname: new FormControl(""),
    fathername: new FormControl(""),
    mothername: new FormControl(""),
    gender: new FormControl(""),
    date: new FormControl(""),
    email: new FormControl(""),
    level: new FormControl(""),
    department: new FormControl(""),
    mobile: new FormControl(""),
  });
  registerSubmited(){
    console.log(this.registration.value);
  }
}