import { UserRole } from "@/generated/prisma";

export interface User{ 
    id?: string;
    name: string;
    email: string;
    password: string; 
    role: UserRole;     
}