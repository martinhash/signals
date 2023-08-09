import { computed, signal } from "@angular/core";
import { User } from "../interfaces/users";

export const users = signal<User[]>([]);
export const currentPage = signal(0);
export const labelTotalUser = computed( () => `Total de usuarios ${users().length}` )