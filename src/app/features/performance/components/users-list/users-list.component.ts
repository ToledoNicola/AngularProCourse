import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";
import { User } from "../../models/user";

/**
 * questo componente attiva la changeDetection(che lavora sul template)
 * solo quando l'input cambia token referenza
 * perche usiamo ChangeDetectionStrategy.OnPush
 */
@Component({
  selector: "app-users-list",
  template: `
    <ul>
      <li *ngFor="let user of users; trackBy: trackId">
        <!-- {{ user.name }} <span> {{ pure(user.age) }} </span> -->
        <p>{{ user.name }}</p>
        <span> {{ user.age | pure }} </span>
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
