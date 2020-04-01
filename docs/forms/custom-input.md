# Custom Form Control

```typescript
@Component({
  selector: "app-input",
  template: `
    <input type="text" placeholder="Scrivi..." />
  `,
  styleUrls: ["./input.component.scss"]
})
export class InputComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}
```

we need to tell Angular how to do a few things:

* Write a value to the input - _writeValue_
* Register a function to tell Angular when the value of the input changes - _registerOnChange_
* Register a function to tell Angular when the input has been touched - _registerOnTouched_
* Disable the input - _setDisabledState_

Any component or directive can be turned into `ControlValueAccessor` by implementing the `ControlValueAccessor`

_ControlValueAccessor_ interface, the bridge between a form control and a native element or custom input component. Once our component implements that interface, we need to tell Angular about it by providing it as a _NG\_VALUE\_ACCESSOR_ so that it can be used

![ControlValueAccessor ponte tra il nativo ed angular](../.gitbook/assets/1_wvjxzql4zzvgmsh3vfv2ew.jpeg)

```typescript
interface ControlValueAccessor {
  writeValue(obj: any): void
  registerOnChange(fn: any): void
  registerOnTouched(fn: any): void
  ...
}
```

The `writeValue` method is used by `formControl` to set the value to the native form control. The `registerOnChange` method is used by `formControl` to register a **callback** that is expected to be triggered every time the native form control is updated. It is your responsibility to **pass the updated value to this callback** so that the value of respective Angular form control is updated. The `registerOnTouched` method is used to indicate that a user interacted with a control.

```typescript
@Component({
  selector: 'my-app',
  template: `
      <input [formControl]="ctrl">
  `
})
export class AppComponent {
  ctrl = new FormControl(3);
}
```

All form directives, including the `formControl` directive used above, call the [setUpControl](https://github.com/angular/angular/blob/f09a266e01e746c802c4d0e132f78a05612ea177/packages/forms/src/directives/shared.ts#L33) function to setup interaction between a `formControl` and a `ControlValueAccessor`. Here is the code snippet demonstrating that for the `formControl` directive:



```typescript
export class FormControlDirective ... {
  ...
  ngOnChanges(changes: SimpleChanges): void {
    if (this._isControlChanged(changes)) {
      setUpControl(this.form, this);
```



{% code title="Snippet 1" %}
```typescript
export function setUpControl(control: FormControl, dir: NgControl) {
  
  // initialize a form control
  dir.valueAccessor.writeValue(control.value);
  
  // setup a listener for changes on the native control
  // and set this value to form control
  dir.valueAccessor.registerOnChange((newValue: any) => {
    control.setValue(newValue, {emitModelToViewChange: false});
  });

  // setup a listener for changes on the Angular formControl
  // and set this value to the native control
  control.registerOnChange((newValue: any, ...) => {
    dir.valueAccessor.writeValue(newValue);
  });
```
{% endcode %}

{% hint style="info" %}
emitModelToViewChange?
{% endhint %}

### Implementing custom value accessor <a id="implementing-custom-value-accessor"></a>

Implementing a custom value accessor is not difficult. It requires 2 simple steps:

1. registering a `NG_VALUE_ACCESSOR` provider
2. implementing `ControlValueAccessor` interface methods

`NG_VALUE_ACCESSOR` provider specifies a class that implements `ControlValueAccessor` interface and is used by Angular to setup synchronization with `formControl`. It’s usually the class of the component or directive that registers the provider. All form directives inject value accessors using the token `NG_VALUE_ACCESSOR` and then select a suitable accessor. If there is an accessor which is not built-in or `DefaultValueAccessor` it is selected. Otherwise Angular picks the default accessor if it’s provided. And there can be no more than one custom accessor defined for an element.

So let’s first define the provider:

```typescript
@Component({
  selector: "app-input",
  ...
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {...}
```

{% hint style="info" %}
#### perchè `forwardRef` e `multi:true` ?
{% endhint %}

```typescript
 /**
   * sarebbe andato bene anche con un formcontrol ma ho preferito cosi per 
   * rendere il piu pulito possibile il ControlValueAccessor e
   * far vedere come si comporta da ponte tra il form angular e il componente 
   */
  value: string; 

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
```

`writeValue(value)` viene chiamata  per inizializzare il valore iniziale ed ogni volta che viene cambiato il valore dal form padre per aggiornare il value del custom input \(vedi snippet 1\)

`registerOnChange(fn)`  restituisce una funzione che deve essere  chiamata ogni volta che ci sono dei cambiamenti per informare il fom padre del cambiamento \(vedi snippet 1\)

