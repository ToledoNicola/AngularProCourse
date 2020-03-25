import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-new-todo",
  template: `
    <form [formGroup]="form" (submit)="create(form.value)">
      <!-- <app-input></app-input> -->
      <input
        type="text"
        placeholder="Scrivi..."
        formControlName="description"
      />

      <button type="submit"><h1>+</h1></button>
    </form>
  `,
  styleUrls: ["./new-todo.component.scss"]
})
export class NewTodoComponent implements OnInit {
  form: FormGroup;
  @Output() newTodo = new EventEmitter();
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      description: [""]
    });
  }

  ngOnInit() {}

  create(data) {
    this.newTodo.emit(data);
  }
}