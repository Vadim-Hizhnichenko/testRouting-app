import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthorizationService} from "../../services/authorization.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router
    ) { }

  submitLogin(){
    this.authorizationService.login(this.loginForm.value).subscribe({
      next: () => this.router.navigate(['admin']),
      error: (err) => alert(err.message)
    })
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl('',[Validators.required, Validators.email]),
      'password': new FormControl('',[Validators.required, Validators.minLength(8)])
    });
    if(this.authorizationService.isLogged()){
      this.router.navigate(['admin'])
    }
  }

}
