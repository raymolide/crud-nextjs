
import Backend from "@/backend"; 
import { User } from "@/core/model/User"; 
import { CreateUserInput, createUserSchema } from "@/schemas/user.schema";
import { useState, useEffect } from "react";

export default function useUser() {
    const [users, setUsers] = useState<User[]>([]);
    const [user, setUser] = useState<Partial< User> | null>(null); 
    const [error, setError] = useState<Partial<Record<keyof CreateUserInput, string[]>> | null>();

   async function saveUser() {
        if (!user) return;

          const result = createUserSchema.safeParse(user);
        
          if (!result.success) {   
             setError(result.error.flatten().fieldErrors)          
            return;
          }

        Backend.users.save(user)
        const users = await Backend.users.getAll();
        setUsers(users);    
        setUser(null)
        setError(null)
    }

    async function deleteUser() {
        if (!user || !user.id) return;
        Backend.users.delete(user.id)
        const users = await Backend.users.getAll();
        setUsers(users);    
        setUser(null)
    }

    async function cencelOperation() {
        setUser(null)
        setError(null)
    }

    async function alterData(user: Partial<User> | null) {       
        
        const result = createUserSchema.safeParse(user);
        
          if (!result.success) {   
             setError(result.error.flatten().fieldErrors)         
            
          }else {
            setError(null)     
        } 
             
          setUser(user)
    }

    useEffect(() => { 
             Backend.users.getAll().then(setUsers);   
    }, []);

    return {    
        users,  
        user, 
        error,
        saveUser,
        setUser,
         deleteUser,
         cencel: cencelOperation ,
         alterUser:  alterData ,
    };
}