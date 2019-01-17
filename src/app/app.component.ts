import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      textForm: ["", Validators.required],
      checkboxForm: ["", Validators.requiredTrue],
      gender: ["", Validators.required]
    });
  }
  onSubmit(value: string): void {
    console.log('送信された値：', value);
  }
}
