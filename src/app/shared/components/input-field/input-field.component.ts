import {
  Component,
  Input,
  input,
  Optional,
  output,
  SkipSelf,
} from '@angular/core';
import {
  ControlContainer,
  FormsModule,
  ReactiveFormsModule,
  FormGroupDirective,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
})
export class InputFieldComponent {
  inputTyping = output<string>(); //output to handle typing
  inputChange = output<string>(); //handle enter after typing
  inputFormControlName = input<string>();
  inputPlaceHolder = input();
  inputType = input();
  inputClass = input();
  inputReadOnly = input();

  constructor(
    @Optional() @SkipSelf() public controlContainer: ControlContainer
  ) {}
  get parentFormGroup(): FormGroup {
    return this.controlContainer?.control as FormGroup;
  }
  onInputTyping(event: any) {
    this.inputTyping.emit(event.target.value);
  }

  onInputChange(event: any) {
    this.inputChange.emit(event.target.value);
  }
}
