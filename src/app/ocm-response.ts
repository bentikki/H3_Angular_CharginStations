declare module OCM {

    export interface DataProviderStatusType {
        IsProviderEnabled: boolean;
        ID: number;
        Title: string;
    }

    export interface DataProvider {
        WebsiteURL: string;
        DataProviderStatusType: DataProviderStatusType;
        IsRestrictedEdit: boolean;
        IsOpenDataLicensed: boolean;
        IsApprovedImport: boolean;
        License: string;
        ID: number;
        Title: string;
    }

    export interface OperatorInfo {
        WebsiteURL: string;
        ID: number;
        Title: string;
        PhonePrimaryContact: string;
        PhoneSecondaryContact: string;
        IsPrivateIndividual?: boolean;
        ContactEmail: string;
        IsRestrictedEdit?: boolean;
        Comments: string;
    }

    export interface UsageType {
        IsPayAtLocation: boolean;
        IsMembershipRequired: boolean;
        IsAccessKeyRequired: boolean;
        ID: number;
        Title: string;
    }

    export interface StatusType {
        IsOperational: boolean;
        IsUserSelectable: boolean;
        ID: number;
        Title: string;
    }

    export interface SubmissionStatus {
        IsLive: boolean;
        ID: number;
        Title: string;
    }

    export interface Country {
        ISOCode: string;
        ContinentCode: string;
        ID: number;
        Title: string;
    }

    export interface AddressInfo {
        ID: number;
        Title: string;
        AddressLine1: string;
        Town: string;
        Postcode: string;
        CountryID: number;
        Country: Country;
        Latitude: number;
        Longitude: number;
        ContactTelephone1: string;
        DistanceUnit: number;
        StateOrProvince: string;
        AddressLine2: string;
        RelatedURL: string;
    }

    export interface ConnectionType {
        IsDiscontinued: boolean;
        IsObsolete: boolean;
        ID: number;
        Title: string;
        FormalName: string;
    }

    export interface StatusType2 {
        IsOperational: boolean;
        IsUserSelectable: boolean;
        ID: number;
        Title: string;
    }

    export interface Level {
        Comments: string;
        IsFastChargeCapable: boolean;
        ID: number;
        Title: string;
    }

    export interface CurrentType {
        Description: string;
        ID: number;
        Title: string;
    }

    export interface Connection {
        ID: number;
        ConnectionTypeID: number;
        ConnectionType: ConnectionType;
        StatusTypeID: number;
        StatusType: StatusType2;
        LevelID: number;
        Level: Level;
        PowerKW: number;
        CurrentTypeID: number;
        CurrentType: CurrentType;
        Quantity: number;
        Amps?: number;
        Voltage?: number;
    }

    export interface OcmResponse {
        DataProvider: DataProvider;
        OperatorInfo: OperatorInfo;
        UsageType: UsageType;
        StatusType: StatusType;
        SubmissionStatus: SubmissionStatus;
        IsRecentlyVerified: boolean;
        DateLastVerified: Date;
        ID: number;
        UUID: string;
        DataProviderID: number;
        OperatorID: number;
        OperatorsReference: string;
        UsageTypeID: number;
        AddressInfo: AddressInfo;
        Connections: Connection[];
        NumberOfPoints: number;
        GeneralComments: string;
        StatusTypeID: number;
        DateLastStatusUpdate: Date;
        DataQualityLevel: number;
        DateCreated: Date;
        SubmissionStatusTypeID: number;
        UsageCost: string;
    }

}

