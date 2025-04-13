'use server'
  
import UserRepository from "./UserRepository";
 
export default async function deleteUser(id: string) { 
      return UserRepository.delete(id);
}