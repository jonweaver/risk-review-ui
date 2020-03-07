import { Insurance } from './insurance';
import { PropertyDetails } from './property-details';

export class HomeInsuranceDetails extends Insurance {
    deductible: number;
    location: string;
    newPurchase: boolean;
    homes: PropertyDetails[];
    businessPartnerships: boolean;
    ownAnyOtherProperties: boolean;
    otherAssetsTitledInYourName: string;
}