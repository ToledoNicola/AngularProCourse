/**
 * per provare la visibilita della DI con la direttiva prova
 */

import { Component, OnInit, InjectionToken } from "@angular/core";
export const ProvaToken = new InjectionToken("prova della di");
@Component({
  selector: "app-pippo",
  template: ``,
  styles: [``],
  providers: [
    // {
    //   provide: ProvaToken,
    //   useValue: { nome: "da component" }
    // }
  ]
})
export class PippoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
