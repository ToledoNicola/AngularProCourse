import {
  Component,
  forwardRef,
  Input,
  HostBinding,
  OnInit
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

@Component({
  selector: "app-input",
  template: `
    <input
      type="text"
      placeholder="Scrivi..."
      [(ngModel)]="value"
      (ngModelChange)="onChange($event)"
    />
  `,
  styles: [
    `
      :host {
        width: 100%;
      }
      input {
        outline: none;
        padding: 1rem;
        border: 1px #d2d2d2 solid;
        border-radius: 6px;
        font-family: "Roboto", sans-serif;
        font-weight: 100;
        width: 100%;
      }
    `
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  /**
   * sarebbe andato bene anche con un formcontrol ma ho preferito cosi per
   * rendere il piu pulito possibile il ControlValueAccessor e
   * far vedere come si comporta da ponte tra il form angular e il componente
   */
  value: string = "";

  // Allow the input to be disabled, and when it is make it somewhat transparent.
  @Input() disabled = false;
  @HostBinding("style.opacity")
  get opacity() {
    return this.disabled ? 0.25 : 1;
  }
  // Function to call when the rating changes.
  onChange = (text: string) => {};

  // Function to call when the input is touched (when a star is clicked).
  onTouched = () => {};

  // Allows Angular to update the model (rating).
  // Update the model and changes needed for the view here.
  writeValue(text: string): void {
    if (text == null) {
      this.value = "";
      return;
    }
    this.value = text;
  }

  // Allows Angular to register a function to call when the model (rating) changes.
  // Save the function as a property to call later here.
  registerOnChange(fn: (text: string) => void): void {
    this.onChange = fn;
  }

  // Allows Angular to register a function to call when the input has been touched.
  // Save the function as a property to call later here.
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Allows Angular to disable the input.
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
