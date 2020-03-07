import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { States } from '../models/states';

@Component({
  selector: 'app-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.scss']
})
export class CustomerInformationComponent {
  customerInfoForm = this.fb.group({
    company: null,
    applicantFirstName: [null, Validators.required],
    applicantLastName: [null, Validators.required],
    applicantDateOfBirth: [null, [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])[\/](0[1-9]|[12]\d|3[01])[\/](19|20)\d{2}$/g)]],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [States[26].abbreviation, Validators.required],
    phoneNumber: [null, [Validators.required, Validators.pattern(/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm)]],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    spouseName: [null],
    spouseDateOfBirth: [null, Validators.pattern(/^(0[1-9]|1[0-2])[\/](0[1-9]|[12]\d|3[01])[\/](19|20)\d{2}$/g)]
  });

  hasUnitNumber = false;

  states = States;

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    alert('Thanks!');
  }
}
