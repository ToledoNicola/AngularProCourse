import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  Input,
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged, tap } from "rxjs/operators";
import { Subscription } from "rxjs";

@Component({
  selector: "app-title-filter",
  template: ` <app-input [formControl]="testo"></app-input> `,
  styles: [
    `
      :host {
        width: 20rem;
        display: block;
      }
    `,
  ],
})
export class TitleFilterComponent implements OnInit, OnDestroy {
  testo = new FormControl("");
  subscription: Subscription;

  @Output() onSearch = new EventEmitter();
  @Input() set value(value: string) {
    this.testo.setValue(value, { emitEvent: false }); // IMPORTANTE altrimenti ogni volta che facciamo il set fara il dispatch dell'action search
  }

  constructor() {}

  ngOnInit() {
    this.subscription = this.testo.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((testo) => this.onSearch.emit(testo));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
