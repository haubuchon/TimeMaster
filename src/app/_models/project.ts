export interface Data {
    id: number;
    name: string;
    children: Data[]
}

export interface Metadata {
}

export interface Project {
    data: Data[];
    metadata: Metadata;
}

