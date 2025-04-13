'use server'


import { User } from "@/core/model/User";
import Id from "@/core/utils/Id"; 
import UserRepository from "./UserRepository"; 

export default async function saveUser(user: Partial<User>) {  
 
    const newUser = {
        ...user,
        id: user.id || Id.generate(),
    }

    return UserRepository.save(newUser as User);
}