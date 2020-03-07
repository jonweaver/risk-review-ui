import { PolicyTerms } from './policy-term';

export abstract class Insurance {
    currentCarrier: string;
    expirationDate: string;
    premium: string;
    policyTerm: PolicyTerms;

}