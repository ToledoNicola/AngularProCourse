import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-navigation",
  template: `
    <ul>
      <li routerLink="calculator">Calculator</li>
      <li routerLink="todo">Todo</li>
      <li routerLink="counter">Counter</li>
      <li routerLink="performance">Performance</li>
      <li routerLink="rxjs">Rxjs</li>
    </ul>
  `,
  styleUrls: ["./navigation.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
