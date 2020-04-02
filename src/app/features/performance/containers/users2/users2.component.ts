import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user";

@Component({
  selector: "app-users2",
  template: `
    <app-new-name (add)="addUser($event)"></app-new-name>
    <app-users-list [data]="users"></app-users-list>
  `,
  styles: [``]
})
export class Users2Component implements OnInit {
  users: User[] = [
    {
      id: 3,
      name: "aa",
      age: 26
    },
    {
      id: 2,
      name: "bb",
      age: 30
    },
    {
      id: 1,
      name: "cc",
      age: 26
    },
    {
      id: 4,
      name: "dd",
      age: 30
    },
    {
      id: 5,

      name: "ee",
      age: 26
    },
    {
      id: 6,

      name: "ff",
      age: 26
    },
    {
      id: 7,

      name: "gg",
      age: 29
    },
    {
      id: 7,

      name: "hh",
      age: 26
    }
  ];

  constructor() {}

  ngOnInit() {}
  addUser(name) {
    // this.users = [...this.users, { id: this.users.length + 5, age: 48, name }]; // la lista SI aggiorna perche non cambia la referenza dell'array
    this.users.push({ id: this.users.length + 5, age: 48, name }); // la lista NON si aggiorna perche non cambia la referenza dell'array
    console.log("users:", this.users);
  }
}
