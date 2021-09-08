import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginFormGroup = new FormGroup({
    login: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

}
