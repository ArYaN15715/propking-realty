import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Property {
    id: bigint;
    status: string;
    title: string;
    propertyType: string;
    bedrooms: bigint;
    area: bigint;
    tags: Array<string>;
    description: string;
    amenities: Array<string>;
    imageUrl: string;
    priceDisplay: string;
    bathrooms: bigint;
    price: bigint;
    location: string;
}
export type Timestamp = bigint;
export interface LeadFormInput {
    contactTime?: string;
    propertyType?: string;
    name: string;
    visitDate?: string;
    formType: string;
    email: string;
    message?: string;
    phone: string;
    budget?: string;
    location?: string;
}
export interface LeadForm {
    id: bigint;
    contactTime?: string;
    propertyType?: string;
    name: string;
    visitDate?: string;
    formType: string;
    email: string;
    message?: string;
    timestamp: Timestamp;
    phone: string;
    budget?: string;
    location?: string;
}
export interface backendInterface {
    getLeads(): Promise<Array<LeadForm>>;
    getProperties(): Promise<Array<Property>>;
    getPropertiesByIds(ids: Array<bigint>): Promise<Array<Property>>;
    getPropertiesByLocation(location: string): Promise<Array<Property>>;
    getPropertiesByType(propertyType: string): Promise<Array<Property>>;
    getPropertyById(id: bigint): Promise<Property | null>;
    submitLead(input: LeadFormInput): Promise<bigint>;
}
