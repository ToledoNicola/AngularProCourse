import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-select-list",
  template: `
    <select [formControl]="filter" (change)="changeFilter.next(filter.value)">
      <!-- <option *ngFor="let filter of filters" [ngValue]="filter">{{
        filter
      }}</option> -->
      <option value="popular">Popolari</option>
      <option value="upcoming">Prossime uscite</option>
      <option value="top_rated">Piu votati</option>
    </select>
  `,
  styleUrls: ["./select-list.component.scss"],
})
export class SelectListComponent implements OnInit {
  filter = new FormControl();
  @Output() changeFilter = new EventEmitter<any>();
  @Input() filters;
  @Input() set active(value) {
    this.filter.setValue(value);
  }
  constructor() {}

  ngOnInit(): void {}
}
