import { Component, OnInit } from '@angular/core';
import { UsersService } from '../httpClient/usersClient';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private userService: UsersService, private routerService: ActivatedRoute) { }
  infoUser: any;
  ngOnInit() {
    this.routerService.paramMap.pipe(
      switchMap((params: ParamMap) => this.userService.getUser(params.get('login')))
    ).subscribe(infoUser => {
      this.infoUser = infoUser;
    });
  }

}
