export interface Data {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
}

export interface Auth {
    access_token: string;
    token_type: string;
    data: Data;
}