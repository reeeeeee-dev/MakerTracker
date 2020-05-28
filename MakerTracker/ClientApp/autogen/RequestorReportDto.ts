﻿// AutoGenerated File


export class RequestorReportDto {

    id: number;

    companyName: string;

    firstName: string;

    lastName: string;

    bio: string;

    phone: string;

    email: string;

    address: string;

    address2: string;

    city: string;

    state: string;

    isSelfQuarantined: boolean;

    createdDate: Date;

    zipCode: string;

    isDropOffPoint: boolean;

    isSupplier: boolean;

    isRequestor: boolean;

    hasCadSkills: boolean;

    displayName: string;

    /** Initializes a new instance of the RequestorReportDto class **/
    public constructor(init?: Partial<RequestorReportDto>) {
        Object.assign(this, init);
    }
}