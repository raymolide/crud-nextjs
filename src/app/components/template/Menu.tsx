'use client'

import { IconHome, IconUser } from "@tabler/icons-react"; 
import MenuItem from "./MenuItem";
import { UserProvider } from "../user/UserProvider";
import { LogoutButton } from "@/app/auth";
import { menuItems } from "@/app/data/constants/menu";

export default function Page() {
   

    return (
        <aside className="w-72 bg-zinc-900 h-screen text-white">
            <UserProvider /> 
            <nav className="flex flex-col gap-4 p-4">
                {menuItems.map((item, index) => (
                    <MenuItem 
                        key={index}
                        icon={item.icon}
                        label={item.label}
                        url={item.url}
                    />
                ))}
                <LogoutButton />
            </nav> 
        </aside>
    );
}
