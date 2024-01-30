import { Option } from "./interfaces";

export const DATE_TIME_FORMAT = "YYYY-MM-DD HH:mm:ss";
export const DATE_FORMAT = "YYYY-MM-DD";
export const GO_DATA_PERSON_FIELDS: Option[] = [
    {
        value: "visualId",
        mandatory: true,
        multiple: false,
        entity: "CASE",
        availableOptions: [],
        optionSetValue: false,
        unique: true,
        valueType: "TEXT",
        label: "case ID",
    },
    {
        value: "visualId",
        mandatory: true,
        multiple: false,
        entity: "CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: true,
        valueType: "TEXT",
        label: "contact ID",
    },
    {
        value: "visualId",
        mandatory: true,
        multiple: false,
        entity: "EVENT",
        availableOptions: [],
        optionSetValue: false,
        unique: true,
        valueType: "TEXT",
        label: "event ID",
    },
    {
        value: "firstName",
        label: "First Name",
        mandatory: true,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
    },
    {
        value: "middleName",
        label: "Middle Name",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
    },
    {
        value: "lastName",
        label: "Last Name",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
    },
    {
        value: "age.months",
        label: "Age - Months",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "INTEGER",
    },
    {
        value: "age.years",
        label: "Age - Years",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "INTEGER",
    },
    {
        value: "dob",
        label: "Date of Birth",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "DATE",
    },
    {
        value: "gender",
        label: "Gender",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: true,
        unique: false,
        valueType: "TEXT",
        optionSet: "LNG_REFERENCE_DATA_CATEGORY_GENDER",
    },
    {
        value: "pregnancyStatus",
        label: "Pregnancy Status",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: true,
        unique: false,
        optionSet: "LNG_REFERENCE_DATA_CATEGORY_PREGNANCY_STATUS",
        valueType: "TEXT",
    },
    {
        value: "occupation",
        label: "Occupation",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: true,
        unique: false,
        valueType: "TEXT",
        optionSet: "LNG_REFERENCE_DATA_CATEGORY_OCCUPATION",
    },

    {
        value: "responsibleUserId",
        label: "Assigned User",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT/EVENT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
    },

    {
        value: "documents[0].type",
        label: "Document type",
        mandatory: false,
        multiple: true,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: true,
        unique: false,
        valueType: "TEXT",
        optionSet: "LNG_REFERENCE_DATA_CATEGORY_DOCUMENT_TYPE",
    },
    {
        value: "documents[0].number",
        label: "Document number",
        mandatory: false,
        multiple: true,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
    },
    {
        value: "addresses[0].typeId",
        label: "Location Type",
        mandatory: true,
        multiple: true,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: true,
        unique: false,
        valueType: "TEXT",
        optionSet: "LNG_REFERENCE_DATA_CATEGORY_ADDRESS_TYPE",
    },
    {
        value: "addresses[0].date",
        label: "Date",
        mandatory: false,
        multiple: true,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "DATE",
    },
    {
        value: "addresses[0].phoneNumber",
        label: "Phone number",
        mandatory: false,
        multiple: true,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
    },
    {
        value: "addresses[0].emailAddress",
        label: "Email address",
        mandatory: false,
        multiple: true,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
    },
    {
        value: "addresses[0].locationId",
        label: "Location",
        mandatory: true,
        multiple: true,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        isOrgUnit: true,
        valueType: "TEXT",
    },
    {
        value: "addresses[0].city",
        label: "City",
        mandatory: false,
        multiple: true,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
    },
    {
        value: "addresses[0].addressLine1",
        label: "Address",
        mandatory: false,
        multiple: true,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
    },
    {
        value: "addresses[0].postalCode",
        label: "Postal code",
        mandatory: false,
        multiple: true,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
    },
    {
        value: "addresses[0].geoLocationAccurate",
        label: "Coordinates are accurate",
        mandatory: false,
        multiple: true,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "BOOLEAN",
    },
];
export const GO_DATA_EVENTS_FIELDS: Option[] = [
    {
        value: "name",
        label: "Name",
        mandatory: true,
        multiple: false,
        entity: "EVENT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
    },
    {
        value: "date",
        label: "Date",
        mandatory: true,
        multiple: false,
        entity: "EVENT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "DATE",
    },
    {
        value: "endDate",
        label: "End date",
        mandatory: false,
        multiple: false,
        entity: "EVENT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "DATE",
    },
    {
        value: "eventCategory",
        label: "Category",
        mandatory: false,
        multiple: false,
        entity: "EVENT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
    },
    {
        value: "description",
        label: "Description",
        mandatory: false,
        multiple: false,
        entity: "EVENT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
    },
    {
        value: "address.date",
        label: "Date",
        mandatory: false,
        multiple: false,
        entity: "EVENT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "DATE",
    },
    {
        value: "address.phoneNumber",
        label: "Phone number",
        mandatory: false,
        multiple: false,
        entity: "EVENT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
    },
    {
        value: "address.emailAddress",
        label: "Email address",
        mandatory: false,
        multiple: false,
        entity: "EVENT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
    },
    {
        value: "address.locationId",
        label: "Location",
        mandatory: true,
        multiple: false,
        entity: "EVENT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        isOrgUnit: true,
        valueType: "TEXT",
    },
    {
        value: "address.city",
        label: "City",
        mandatory: false,
        multiple: false,
        entity: "EVENT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
    },
    {
        value: "address.addressLine1",
        label: "Address",
        mandatory: false,
        multiple: false,
        entity: "EVENT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
    },
    {
        value: "address.postalCode",
        label: "Postal code",
        mandatory: false,
        multiple: false,
        entity: "EVENT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
    },
    {
        value: "address.geoLocationAccurate",
        label: "Coordinates are accurate",
        mandatory: false,
        multiple: false,
        entity: "EVENT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "BOOLEAN",
    },
];
export const GO_DATA_EPIDEMIOLOGY_FIELDS: Option[] = [
    {
        value: "classification",
        label: "Case classification",
        mandatory: false,
        multiple: false,
        entity: "CASE",
        availableOptions: [],
        optionSetValue: true,
        unique: false,
        valueType: "TEXT",
        optionSet: "LNG_REFERENCE_DATA_CATEGORY_CASE_CLASSIFICATION",
    },
    {
        value: "dateOfOnset",
        label: "Date of onset",
        mandatory: true,
        multiple: false,
        entity: "CASE",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "DATE",
    },
    {
        value: "isDateOfOnsetApproximate",
        label: "Date of onset approximate",
        mandatory: false,
        multiple: false,
        entity: "CASE",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "BOOLEAN",
    },
    {
        value: "dateBecomeCase",
        label: "Date of becoming a case",
        mandatory: false,
        multiple: false,
        entity: "CASE",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "DATE",
    },
    {
        value: "dateOfInfection",
        label: "Date of infection",
        mandatory: false,
        multiple: false,
        entity: "CASE",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "DATE",
    },
    {
        value: "investigationStatus",
        label: "Case investigation status",
        mandatory: false,
        multiple: false,
        entity: "CASE",
        availableOptions: [],
        optionSetValue: true,
        unique: false,
        valueType: "TEXT",
        optionSet: "LNG_REFERENCE_DATA_CATEGORY_INVESTIGATION_STATUS",
    },
    {
        value: "dateInvestigationCompleted",
        label: "Date of investigation completed",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "DATE",
    },
    {
        value: "outcomeId",
        label: "Outcome",
        mandatory: false,
        multiple: false,
        entity: "CASE",
        availableOptions: [],
        optionSetValue: true,
        unique: false,
        valueType: "TEXT",
        optionSet: "LNG_REFERENCE_DATA_CATEGORY_OUTCOME",
    },
    {
        value: "dateOfOutcome",
        label: "Date of outcome",
        mandatory: false,
        multiple: false,
        entity: "CASE",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "DATE",
    },

    {
        value: "deathLocationId",
        label: "Place of death",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
    },
    {
        value: "safeBurial",
        label: "Was burial performed safely?",
        mandatory: false,
        multiple: false,
        entity: "CASE",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "BOOLEAN",
    },
    {
        value: "burialLocationId",
        label: "Place of Burial",
        mandatory: false,
        multiple: false,
        entity: "CASE",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
    },
    {
        value: "burialPlaceName",
        label: "Burial Place Name",
        mandatory: false,
        multiple: false,
        entity: "CASE",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
    },
    {
        value: "dateOfReporting",
        label: "Date of reporting",
        mandatory: true,
        multiple: false,
        entity: "CASE/CONTACT/EVENT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "DATE",
    },
    {
        value: "isDateOfReportingApproximate",
        label: "Date of reporting approximate",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT/EVENT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "BOOLEAN",
    },
    {
        value: "riskLevel",
        label: "Risk Level",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: true,
        unique: false,
        valueType: "TEXT",
        optionSet: "LNG_REFERENCE_DATA_CATEGORY_RISK_LEVEL",
    },
    {
        value: "riskReason",
        label: "Risk Reason",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
    },
    {
        value: "vaccinesReceived[0].vaccine",
        label: "Vaccine",
        mandatory: false,
        multiple: true,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: true,
        unique: false,
        valueType: "TEXT",
        optionSet: "LNG_REFERENCE_DATA_CATEGORY_VACCINE",
    },
    {
        value: "vaccinesReceived[0].date",
        label: "Vaccine date",
        mandatory: false,
        multiple: true,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "DATE",
    },
    {
        value: "vaccinesReceived[0].status",
        label: "Vaccine status",
        mandatory: false,
        multiple: true,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: true,
        unique: false,
        valueType: "TEXT",
        optionSet: "LNG_REFERENCE_DATA_CATEGORY_VACCINE_STATUS",
    },
    {
        value: "followUpTeamId",
        label: "Follow-up assigned team",
        mandatory: false,
        multiple: false,
        entity: "CONTACT",
        valueType: "TEXT",
    },
    {
        value: "followUp.status",
        label: "Follow-up final status",
        mandatory: false,
        multiple: false,
        availableOptions: [],
        optionSetValue: true,
        entity: "CONTACT",
        valueType: "TEXT",
        optionSet: "LNG_REFERENCE_DATA_CONTACT_DAILY_FOLLOW_UP_STATUS_TYPE",
    },

    {
        value: "transferRefused",
        label: "Refused transfer to treatment unit",
        mandatory: false,
        multiple: false,
        entity: "CASE",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "BOOLEAN",
    },
    {
        value: "dateRanges[0].typeId",
        label: "Hospitalization/isolation type",
        mandatory: false,
        multiple: true,
        entity: "CASE",
        availableOptions: [
            {
                id: "A&E visit",
                label: "A&E visit",
                value: "LNG_REFERENCE_DATA_CATEGORY_PERSON_DATE_TYPE_A_E_VISIT",
            },
            {
                id: "Hospitalization",
                label: "Hospitalization",
                value: "LNG_REFERENCE_DATA_CATEGORY_PERSON_DATE_TYPE_HOSPITALIZATION",
            },
            {
                id: "Hospitalization for other medical conditions",
                label: "Hospitalization for other medical conditions",
                value: "LNG_REFERENCE_DATA_CATEGORY_PERSON_DATE_TYPE_HOSPITALIZATION_FOR_OTHER_MEDICAL_CONDITIONS",
            },
            {
                id: "ICU Admission",
                label: "ICU Admission",
                value: "LNG_REFERENCE_DATA_CATEGORY_PERSON_DATE_TYPE_ICU_ADMISSION",
            },
            {
                id: "Isolation",
                label: "Isolation",
                value: "LNG_REFERENCE_DATA_CATEGORY_PERSON_DATE_TYPE_ISOLATION",
            },
            {
                id: "Other",
                label: "Other",
                value: "LNG_REFERENCE_DATA_CATEGORY_PERSON_DATE_TYPE_OTHER",
            },
            {
                id: "Outpatient visit",
                label: "Outpatient visit",
                value: "LNG_REFERENCE_DATA_CATEGORY_PERSON_DATE_TYPE_OUTPATIENT_VISIT",
            },
            {
                id: "Primary health care PHC (GP, etc) visit",
                label: "Primary health care PHC (GP, etc) visit",
                value: "LNG_REFERENCE_DATA_CATEGORY_PERSON_DATE_TYPE_PRIMARY_HEALTH_CARE_PHC_GP_ETC_VISIT",
            },
        ],
        optionSetValue: true,
        unique: false,
        valueType: "TEXT",
    },
    {
        value: "dateRanges[0].centerName",
        label: "Centre Name",
        mandatory: false,
        multiple: true,
        entity: "CASE",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
    },
    {
        value: "dateRanges[0].locationId",
        label: "Location of hospital/facility",
        mandatory: false,
        multiple: true,
        entity: "CASE",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
    },
    {
        value: "dateRanges[0].comments",
        label: "Comments",
        mandatory: false,
        multiple: true,
        entity: "CASE",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
    },
    {
        value: "dateRanges[0].startDate",
        label: "From (Date)",
        mandatory: false,
        multiple: true,
        entity: "CASE",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "DATE",
    },
    {
        value: "dateRanges[0].endDate",
        label: "To (Date)",
        mandatory: false,
        multiple: true,
        entity: "CASE",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "DATE",
    },
];
export const GO_DATA_LAB_FIELDS: Option[] = [
    {
        value: "sampleIdentifier",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
        label: "Sample Lab ID",
    },
    {
        value: "dateSampleTaken",
        mandatory: true,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "DATE",
        label: "Date sample taken",
    },
    {
        value: "dateSampleDelivered",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "DATE",
        label: "Date sample delivered to lab",
    },
    {
        value: "dateTesting",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "DATE",
        label: "Date sample tested",
    },
    {
        value: "dateOfResult",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "DATE",
        label: "Date of the result",
    },
    {
        value: "labName",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
        label: "Lab name",
    },
    {
        value: "sampleType",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: true,
        unique: false,
        valueType: "TEXT",
        label: "Sample type",
        optionSet: "LNG_REFERENCE_DATA_CATEGORY_TYPE_OF_SAMPLE",
    },
    {
        value: "testType",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: true,
        unique: false,
        valueType: "TEXT",
        label: "Test type",
        optionSet: "LNG_REFERENCE_DATA_CATEGORY_TYPE_OF_LAB_TEST",
    },
    {
        value: "result",
        mandatory: true,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: true,
        unique: false,
        valueType: "TEXT",
        label: "Result",
        optionSet: "LNG_REFERENCE_DATA_CATEGORY_LAB_TEST_RESULT",
    },
    {
        value: "status",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
        label: "Status",
        optionSet: "LNG_REFERENCE_DATA_CATEGORY_LAB_TEST_RESULT",
    },
    {
        value: "testedFor",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
        label: "Tested for",
    },
    {
        value: "quantitativeResult",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
        label: "Quantitative result",
    },
    {
        value: "notes",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
        label: "Notes",
    },
    {
        value: "sequence.hasSequence",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "BOOLEAN",
        label: "Has variant/strain?",
    },
    {
        value: "sequence.dateSampleSent",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "DATE",
        label: "Date sample sent for determining variant/strain",
    },
    {
        value: "sequence.labId",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
        label: "Variant/strain Lab Name",
    },
    {
        value: "sequence.dateResult",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "DATE",
        label: "Variant/strain result date",
    },
    {
        value: "sequence.resultId",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
        label: "Variant/strain result",
    },
    {
        value: "sequence.noSequenceReason",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
        label: "Reason",
    },
];

export const GO_DATA_RELATIONSHIP_FIELDS: Option[] = [
    {
        value: "dateOfFirstContact",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "DATE",
        label: "Date of first contact",
    },
    {
        value: "dateOfLastContact",
        mandatory: true,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "DATE",
        label: "Date of last contact",
    },
    {
        value: "contactDateEstimated",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
        label: "Is contact date estimated?",
    },
    {
        value: "certaintyLevelId",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
        label: "Certainty level",
    },
    {
        value: "exposureTypeId",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
        label: "Exposure type",
    },
    {
        value: "exposureFrequencyId",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
        label: "Exposure frequency",
    },
    {
        value: "exposureDurationId",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
        label: "Exposure duration",
    },
    {
        value: "clusterId",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
        label: "Cluster",
    },
    {
        value: "socialRelationshipTypeId",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
        label: "Context of exposure",
    },
    {
        value: "socialRelationshipDetail",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
        label: "Relationship",
    },
    {
        value: "comment",
        mandatory: false,
        multiple: false,
        entity: "CASE/CONTACT",
        availableOptions: [],
        optionSetValue: false,
        unique: false,
        valueType: "TEXT",
        label: "Comments",
    },
];
