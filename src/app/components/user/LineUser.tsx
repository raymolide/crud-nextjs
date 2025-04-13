import { User } from "@/core/model/User";
import Image from "next/image";

export interface LineUserProps {
    user: User;
    onClick?: (user:User) => void;
}


export default function LineUser(props: LineUserProps) {
    return (
        <div onClick={() => props.onClick?.(props.user)} className="flex flex-col bg-zinc-900 p-4 roundend-md ">
         
            <div className="flex items-center gap-5 mt-2">
            <Image 
            src="https://i.pravatar.cc/80" 
            alt="User" 
            width={50} 
            height={50} 
            className="rounded-full"
             />
            <div className="flex flex-col">
                <span className="text-lg font-black">{props.user.name}</span>
                <span className=" text-sm text-zinc-400 ">{props.user.email}</span>

            </div>
            </div>
        </div>
    );
}