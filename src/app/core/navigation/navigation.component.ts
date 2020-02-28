import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-navigation",
  template: `
    <ul>
      <li routerLink="calculator" routerLinkActive="active">Calculator</li>
      <li routerLink="todo" routerLinkActive="active">Todo</li>
      <li routerLink="counter" routerLinkActive="active">Counter</li>
      <li routerLink="performance" routerLinkActive="active">Performance</li>
      <li routerLink="rxjs" routerLinkActive="active">Rxjs</li>
    </ul>
  `,
  styleUrls: ["./navigation.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
