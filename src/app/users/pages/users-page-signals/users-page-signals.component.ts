import { Component, computed, inject, signal } from '@angular/core';
import { User } from '../../interfaces/users';
import { UsersService } from '../../services/users.service';
import { filter } from 'rxjs';
import { currentPage, labelTotalUser, users } from '../../store/user.store';

@Component({
  templateUrl: './users-page-signals.component.html',
  styleUrls: ['./users-page-signals.component.css'],
})
export class UsersPageSignalsComponent {
  public userService = inject(UsersService);

  ngOnInit(){
    this.loadPage(currentPage())
  }

  loadPage(page: number){
    this.userService.loadPage(page)
    .pipe(
      filter( users => users.length > 0 )
    )
    .subscribe((resp) => {
      users.update( currentUsers => [...currentUsers, ...resp] );
      currentPage.set(page)
    });
  }

  get users(){
    return users()
  }
  
  get labelTotalUser(){
    return labelTotalUser()
  }

  get currentPage(){
    return currentPage()
  }
}
