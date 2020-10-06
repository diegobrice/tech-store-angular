import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  emailField: FormControl;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() {
    this.emailField = new FormControl('example@email.com', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]);
    this.emailField.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  ngOnInit(): void {}

  sendMail(): void {
    if (this.emailField.valid) {
      console.log(this.emailField.value);
    }
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
