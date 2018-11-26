export interface User {
    userID: string;
    userName: string;
    password: string;
}

export interface Users {
    status: string;
    users: User[];
}



