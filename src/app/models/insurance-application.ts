import { Customer } from './customer';
import { AutoInsuranceDetails } from './auto-insurance-details';
import { HomeInsuranceDetails } from './home-insurance-details';

export class InsuranceApplication {
    customerInformation: Customer;
    autoInsuranceDetails: AutoInsuranceDetails;
    homeInsuranceDetails: HomeInsuranceDetails;
}