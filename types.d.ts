 export type UserTypes = {
    _id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    image: string;
    role: string;
    root: boolean;
    competition: string;
    createdAt: number;
    updatedAt: number;
    business_name: string;
}

export type Role = {
    user?: string;
    admin?: string;
    judge?: string;
}