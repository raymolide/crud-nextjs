'use server'
  
import UserRepository from "./UserRepository";
 
export default async function getUser(id: string) { 
      return UserRepository.getById(id);
}