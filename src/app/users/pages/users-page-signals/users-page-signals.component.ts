import { Component, signal } from '@angular/core';
import { User } from '../../interfaces/users';

@Component({
  templateUrl: './users-page-signals.component.html',
  styleUrls: ['./users-page-signals.component.css'],
})
export class UsersPageSignalsComponent {
  public users = signal<User[]>([])
}
