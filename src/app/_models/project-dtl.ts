export interface Parent {
    id: number;
    name: string;
    is_active: boolean;
}

export interface CustomFields {
    custom_174: string;
    custom_175: string;
    custom_176: boolean;
    custom_177: boolean;
    custom_178: number;
    custom_179: string;
    custom_180: string;
    custom_181: string;
    custom_182: string;
    custom_183: number;
    custom_184: number;
    custom_267: boolean;
}

export interface Data {
    id: number;
    parent: Parent;
    name: string;
    is_active: boolean;
    description: string;
    start_date?: any;
    due_date?: any;
    custom_fields: CustomFields;
}

export interface Metadata {
}

export interface ProjectDtl {
    data: Data;
    metadata: Metadata;
}


