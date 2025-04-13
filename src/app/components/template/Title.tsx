 

import { ElementType } from "react";

export interface TitleProps {
    icon: ElementType
    primary: string;
    secondary: string;
}

export default function TitleItem(props: TitleProps) {
    return (
        <div className="flex gap-2 p-2 ">
            <props.icon size={55} stroke={1} />
            <div className="flex flex-col ">
                <h1 className="text-xl font-black">{props.primary}</h1>
                <h2 className="text-sm text-zinc-400">{props.secondary}</h2>
            </div>
        </div>
    );
}
