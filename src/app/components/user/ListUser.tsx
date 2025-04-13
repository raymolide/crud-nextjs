 
import LineUser from "./LineUser";
import { User } from "@/core/model/User";

export interface ListUserProps { 
    users : User[];
    onClick?: (user:User) => void;
}

export default function ListUser(props:ListUserProps) {
    return (
        <div className="flex flex-col gap-2 rounded-md cursor-pointer">
            {props.users.map((user:User) => (
                 <LineUser key={user.id} user={user} onClick={props.onClick}/> 
            ))}
        </div>
    );
}