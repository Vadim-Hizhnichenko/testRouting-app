import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthorizationService} from "../../../../services/authorization.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthorizationService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authService.logOut()
  }

}
