import { Driver } from './driver';
import { Vehicle } from './vehicle';

export class AutoInsuranceDetails {
    currentCarrier: string;
    expirationDate: string;
    premium: string;
    policyTerm: string;
    householdMembers: number;
    numberOfDrivers: number;
    drivers: Driver[];
    vehicles: Vehicle[];
    currentLiabilityLimit?: number;
    collisionCoverage?: boolean;
    broad?: boolean;
    regular?: boolean;
    liabilityDeductible?: number;
    comprehensiveCoverage?: boolean;
    comprehensiveDeductible?: number;
    towing?: boolean;
    rentalCoverage?: boolean;
    roadSide?: boolean;
    numberOfTicketsLast3Years: number;
    numberOfAccidentsLast5Years: number;
    atFaultAccidents?: number;
    titleInApplicantsName: boolean;
    driveCompanyVehicle: boolean;
    ownRecreationsVehicles: boolean;
    ownAntiqueCars: boolean;
}