import { UserService } from './../../service/user.service';
import { User } from './../../model/user.model';
import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  public userName = ''
  users = new Array<User>();
  user: User = new User("", "", 0);
  message = '';
  msgClass = '';


  constructor(private userService: UserService) {
    console.log('constructor .....ManageUsersComponent ')
  }

  ngOnInit() {
    console.log('ngOnInit .....ManageUsersComponent ')
    this.userService.getUsers().subscribe((data) => this.users = data);
  }


  public registerNow() {
    let resp = this.userService.doRegistration(this.user);
    resp.subscribe(
    (res) => {
      this.message = res;      
      this.msgClass = 'successMsg'
      this.user = new User("", "", 0);
      this.userService.getUsers().subscribe((data) => this.users = data);      
      this.clearMsg(5000);
    },
    (error)=> {
      this.message = error;
      this.msgClass = 'errorMsg'
      this.clearMsg(5000);
    });
  }

  public findUserByEmail(email: string) {
    this.userService.getUserByEmail(email);
  }

  public findUsersByName() {
    this.users = this.userService.getUsersByName(this.userName);
  }

  public delteUser(email: string) {
    let resp = this.userService.deleteUser(email);
    resp.subscribe((data) => {
      this.userService.getUsers().subscribe((data) => this.users = data);
    });
  }

  clearMsg(inSec: number) {
    const _self = this;
    setTimeout(function() {
      _self.message = '';
      _self.msgClass = ''
    }, inSec)
  }

}
