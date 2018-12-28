export interface User {
    userID: string;
    userName: string;
    password: string;
    email: string;
    isAdmin: boolean;
}

export interface Users {
    status: string;
    users: User[];
}



