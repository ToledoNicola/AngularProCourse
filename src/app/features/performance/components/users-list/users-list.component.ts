import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";
import { User } from "../../models/user";

@Component({
  selector: "app-users-list",
  template: `
    <ul>
      <li *ngFor="let user of users; trackBy: trackId">
        {{ user.name }} <span> {{ pure(user.age) }} </span>
      </li>
    </ul>
  `,
  styleUrls: ["./users-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit {
  @Input("data") users: User[];

  constructor() {}

  ngOnInit() {}

  pure(value: any): any {
    console.log("executed", value);
    return value;
  }

  trackId(index, value) {
    return value.id;
  }
}
