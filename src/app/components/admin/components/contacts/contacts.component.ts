import { Component, OnInit } from '@angular/core';
import {filter, mapTo, merge, Observable} from "rxjs";
import {User} from "../../User";
import {AdminService} from "../../services/admin.service";
import {ResolveEnd, ResolveStart, Router} from "@angular/router";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  private showLoading!: Observable<boolean>
  private hideLoading!: Observable<boolean>
  isLoading!: Observable<boolean>

  personalList!: Observable<User[]>

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.personalList = this.adminService.getPersonList();

    this.hideLoading = this.router.events.pipe(filter((e)=> e instanceof ResolveEnd),
      mapTo(false));

    this.showLoading = this.router.events.pipe(filter((e)=> e instanceof ResolveStart),
      mapTo(true));

    this.isLoading = merge(this.hideLoading, this.showLoading)

  }

}
