import { IconHome } from "@tabler/icons-react";
import Link from "next/link";

import { ElementType } from "react";

export interface MenuProps {
    icon: ElementType 
    label: string;
    url: string;    
}

export default function MenuItem(props: MenuProps) {
    return (     
    <Link href={props.url} className="flex items-center gap-2 p-2 text-zinc-200 hover:bg-zinc-800 rounded-md">
        <props.icon  />
        <span>{props.label}</span> 
    </Link>
    );
}