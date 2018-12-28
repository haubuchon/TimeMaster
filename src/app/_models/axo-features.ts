export interface EstimatedDuration {
    duration_minutes: number;
}

export interface AssignedTo {
    name: string;
    id: number;
    type: string;
}

export interface Customer {
    id: number;
    company_name: string;
}

export interface Project {
    name: string;
    path: string;
    id: number;
}

export interface Status {
    name: string;
    order: number;
    id: number;
}

export interface CustomFields {
    custom_214: string;
}

export interface Attachments {
    count: number;
}

export interface Subitems {
    count: number;
}

export interface Parent {
    id: number;
}

export interface WorkflowStep {
    name: string;
    order: number;
    id: number;
}

export interface Feature {
    estimated_duration: EstimatedDuration;
    assigned_to: AssignedTo;
    customer: Customer;
    project: Project;
    status: Status;
    custom_fields: CustomFields;
    start_date: Date;
    name: string;
    description: string;
    id: number;
    number: string;
    item_type: string;
    attachments: Attachments;
    subitems: Subitems;
    parent: Parent;
    workflow_step: WorkflowStep;
}

export interface EstimatedDuration2 {
    duration_minutes: number;
}

export interface AssignedTo2 {
    name: string;
    id: number;
    type: string;
}

export interface Customer2 {
    id: number;
    company_name: string;
}

export interface Project2 {
    name: string;
    path: string;
    id: number;
}

export interface Status2 {
    name: string;
    order: number;
    id: number;
}

export interface CustomFields2 {
    custom_214: string;
}

export interface Attachments2 {
    count: number;
}

export interface Subitems2 {
    count: number;
}

export interface Parent2 {
    id: number;
}

export interface WorkflowStep2 {
    name: string;
    order: number;
    id: number;
}

export interface ParentItem {
    estimated_duration: EstimatedDuration2;
    assigned_to: AssignedTo2;
    customer: Customer2;
    project: Project2;
    status: Status2;
    custom_fields: CustomFields2;
    start_date: Date;
    id: number;
    number: string;
    item_type: string;
    attachments: Attachments2;
    subitems: Subitems2;
    parent: Parent2;
    workflow_step: WorkflowStep2;
}

export interface Metadata {
    total_count: number;
    page: number;
    page_size: number;
    minutes_worked: number;
    minutes_estimated: number;
    minutes_remaining: number;
    percent_complete: number;
    parent_items: ParentItem[];
}

export interface AxoFeatures {
    data: Feature[];
    metadata: Metadata;
}