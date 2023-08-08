import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/users';
import { filter } from 'rxjs';

@Component({
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css'],
})
export class UsersPageComponent {
  public users: User[] = [];
  public currentPage: number = 1;

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.loadPage(this.currentPage);
  }

  loadPage(page: number) {
    this.userService.loadPage(page)
    .pipe(
      filter( users => users.length > 0 )
    )
    .subscribe((resp) => {
      this.currentPage = page;
      this.users = resp;
    });
  }
}
