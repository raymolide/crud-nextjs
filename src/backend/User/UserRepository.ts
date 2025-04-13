import { User } from "@/core/model/User";  
import { PrismaClient } from "@/generated/prisma";
import { hash } from "bcrypt";

export default class UserRepository {

    private static db: PrismaClient = new PrismaClient();
    
    static async getAll()   {    
        return await this.db.user.findMany();
    }
    static async getById(id: string):Promise<User | null> {       
        return await this.db.user.findUnique({
            where: { email:id }
        });
    }
  static async save(user: User) : Promise<User> {  
        if (user.password) {
            user.password = await hash(user.password, 10);
        }
    
        return await this.db.user.upsert({
            where: { email: user.email },
            update: user,
            create: user
        });
    }

    static async delete(id: string): Promise<User | null> {    
        return await this.db.user.delete({
            where: { id }
        });
    }

    
}