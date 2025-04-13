 
 
import Menu from "./Menu"; 

export interface PageProps {
    children: React.ReactNode;
    className?: string;
}

export default function Page(props: PageProps) {
 
    return (
        <div className="flex gap-4 p-4">
             <Menu />
            <main className={`flex-1 p-7 ${props.className}`}>{props.children}</main>
        </div>
    );
}