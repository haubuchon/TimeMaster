export interface User {
    userID: string;
    userName: string;
    password: string;
    email: string;
}

export interface Users {
    status: string;
    users: User[];
}



