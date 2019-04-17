import { Component, OnInit } from '@angular/core';
import { UsersService } from '../httpClient/usersClient';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UsersService) { }
  title = 'Level1';
  client_count = 0;
  clientList: any;
  clientName = '';
  getClients(){
    this.userService.getUsers().subscribe(response => this.showUsers(response));
  }

  showUsers(users: any): void {
    this.client_count = users.total_count;
    this.clientList = users.items.slice(0, 10);
  }

  ngOnInit() {
  }

}
