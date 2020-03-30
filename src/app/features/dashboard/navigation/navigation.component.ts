import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-navigation",
  template: `
    <ul>
      <li routerLink="performance" routerLinkActive="active">Performance</li>
      <li routerLink="rxjs" routerLinkActive="active">Rxjs</li>
      <li routerLink="redux" routerLinkActive="active">Redux</li>
      <li routerLink="ngrx" routerLinkActive="active">Ngrx</li>
    </ul>
  `,
  styleUrls: ["./navigation.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
