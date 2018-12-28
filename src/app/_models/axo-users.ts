export interface SecurityRole {
    name: string;
    id: number;
}

export interface User {
    id: number;
    first_name: string;
    last_name: string;
    full_name: string;
    email: string;
    login_id: string;
    windows_id: string;
    use_windows_auth: boolean;
    built_in_account: boolean;
    is_active: boolean;
    is_locked: boolean;
    last_login_date_time?: Date;
    failed_logins: number;
    created_date_time: Date;
    last_updated_date_time: Date;
    security_roles: SecurityRole[];
}

export interface AxoUsers {
    data: User[];
}
