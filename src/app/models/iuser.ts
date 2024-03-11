export interface IUser {
    id: number;
    email: string;
    password: string;
    name: string;
    lastname: string;
    createdAt: Date;
    updatedAt: Date;
    role: string;
}
