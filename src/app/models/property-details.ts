import { HouseStyle } from './house-style';
import { PlumbingTypes } from './plumbing-types';

export class PropertyDetails {
    yearBuilt: number;
    squareFeet: number;
    numberOfStories: number;
    roofYear: number;
    homeStyle: HouseStyle;
    brick: boolean;
    fullBathrooms: number;
    halfBathrooms?: number;
    kitches: number;
    garage: boolean;
    garageBuildersGrade: boolean;
    attachedGarage: boolean;
    numberOfVehicles: number;
    plumbing: PlumbingTypes;
    basement: boolean;
    percentBasementFinished?: number;
    walkoutBasement: boolean;
    flooringPercentWood?: number;
    flooringPercentCeramic?: number;
    flooringPercentVinyl?: number;
    flooringPercentLaminate?: number;
    flooringPercentCarpet?: number;
    flooringPercentCarpetOverWood?: number;
    centralAir: boolean;
    mortgage: boolean;
    claimsInLast5Years: number;
    burglarOrFireAlarm: boolean;
    sumpPump: boolean;
    propertyStoredOffPremises: boolean;
    gasFireplaceCount: number;
    woodFireplaceCount: number;
    electricFireplaceCount: number;
    businessConductedInHome: boolean;
    uniqueHouseFeatures: string;
}
