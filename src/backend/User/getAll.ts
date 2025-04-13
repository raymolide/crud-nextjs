'use server'
 
import UserRepository from "./UserRepository";

export default async function getAllUser() { 
      return UserRepository.getAll();
}