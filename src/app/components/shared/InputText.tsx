 

export interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string    
    error?:  string
}

export default function InputText(props: InputTextProps) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={props.id} className="text-white">{props.label}</label>
            <input {...props} className={`p-2 rounded-md bg-zinc-800 text-white ${props.className}`} />
            {props.error && <p className="text-red-500 text-sm mt-1">{props.error}</p>} 
        </div>
    );
}