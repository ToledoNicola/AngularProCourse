import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user";

@Component({
  selector: "app-users",
  template: `
    <app-input (add)="addUser($event)"></app-input>
    <app-users-list [data]="users"></app-users-list>
  `,
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  users: User[] = [
    {
      id: 3,
      name: "sergio",
      age: 26
    },
    {
      id: 2,
      name: "haaa",
      age: 30
    },
    {
      id: 1,
      name: "ssjsjs",
      age: 26
    },
    {
      id: 4,
      name: "jjj",
      age: 30
    },
    {
      id: 5,

      name: "hhh",
      age: 26
    },
    {
      id: 6,

      name: "iiii",
      age: 26
    },
    {
      id: 7,

      name: "yyy",
      age: 29
    },
    {
      id: 7,

      name: "wwww",
      age: 26
    },
    {
      id: 8,

      name: "pppp",
      age: 26
    },
    {
      id: 9,
      name: "iii",
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
