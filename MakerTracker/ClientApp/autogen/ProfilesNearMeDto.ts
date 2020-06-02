﻿// AutoGenerated File


export class ProfilesNearMeDto {

    id: number;

    companyName: string;

    firstName: string;

    lastName: string;

    city: string;

    state: string;

    isSupplier: boolean;

    isRequestor: boolean;

    distanceInMiles: number;

    /** Initializes a new instance of the ProfilesNearMeDto class **/
    public constructor(init?: Partial<ProfilesNearMeDto>) {
        Object.assign(this, init);
    }
}