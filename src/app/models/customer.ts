import { Person } from './person';
import { Address } from './address';

export class Customer extends Person {
    address: Address;
    spouseName: string;
    spouseDateOfBirth: string;
    collegeName: string;
    healthInsuranceProvider: string;
    healthInsuranceGroupNumber: string;
    employer: string;
    retired: boolean;
    organization: string;
    priorAddress: Address;
    email: string;
    phoneNumber: string;
}