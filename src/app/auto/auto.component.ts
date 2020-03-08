import { Component, OnInit, Predicate } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, FormControl, RequiredValidator, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss']
})
export class AutoComponent implements OnInit {



  policyTerm = new FormControl('6 months', requiredIfValidator(() => this.currentCarrierForm.get('currentCarrier').value !== ''));
  numberOfDrivers = new FormControl(null, Validators.required)


  currentCarrierForm = this.fb.group({
    currentCarrier: [null],
    expirationDate: [null, [
      Validators.pattern(/^(0[1-9]|1[0-2])[\/](0[1-9]|[12]\d|3[01])[\/](19|20)\d{2}$/g),
      requiredIfValidator(() => this.currentCarrierForm.get('currentCarrier').value !== '')
    ]],
    premium: [null, requiredIfValidator(() => this.currentCarrierForm.get('currentCarrier').value !== '')],
    policyTerm: this.policyTerm,


  });

  houseHoldInfoForm = this.fb.group({
    totalNumberOfHouseholdMembers: [null, Validators.required],
    numberOfDrivers: this.numberOfDrivers,
    drivers: this.fb.array([this.createItem()])

  })

  shouldShowCustomerInformationForm: boolean = false;

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {

    const customerInformation = sessionStorage.getItem('customerInformation');

    if (!customerInformation) {
      this.shouldShowCustomerInformationForm = true;
    }

  }

  onCustomerInformationComplete(complete: boolean): void {
    this.shouldShowCustomerInformationForm = false;
  }

  createItem(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      driversLicenseNumber: ['', Validators.required]
    });
  }

  onSubmit() {

  }

}

function requiredIfValidator(predicate: () => boolean) {
  return ((formControl: AbstractControl) => {
    if (!formControl.parent) {
      return null;
    }
    if (predicate()) {
      return Validators.required(formControl);
    }
    return null;
  })
}