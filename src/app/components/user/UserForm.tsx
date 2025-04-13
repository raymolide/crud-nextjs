'use client'
import { User } from "@/core/model/User";
import InputText from "../shared/InputText"; 
import { CreateUserInput } from "@/schemas/user.schema";

export interface UserFormProps {
  user: Partial<User>;
  error?: Partial<Record<keyof CreateUserInput, string[]>> | null;
  onChange?: (user: Partial<User>) => void;
  onSave?: () => void;
  onCancel?: () => void;
  onDelete?: () => void;
}

export default function UserForm(props: UserFormProps) {
  return (
    <div className="flex flex-col gap-4">
      <InputText id="name" label="Name" type="text"
        value={props.user.name ?? ''}
        onChange={e => props.onChange?.({ ...props.user, name: e.target.value })     
        } 
        error={props.error?.name?.join(', ')}
        />
      <InputText id="email" label="Email" type="email"
        value={props.user.email ?? ''}
        onChange={e => props.onChange?.({ ...props.user, email: e.target.value })} 
        error={props.error?.email?.join(', ')}
        />
      <InputText id="password" label="Password" type="password" value={props.user.password ?? ''}
        onChange={e => props.onChange?.({ ...props.user, password: e.target.value })} 
        error={props.error?.password?.join(', ')}/>

      <div className="flex gap-4 justify-between">
        <div className="flex gap-4">
          <button className="bg-green-500 rounded-md px-4 py-2 cursor-pointer" onClick={props.onSave}>Save</button>

          <button className="bg-gray-500   rounded-md px-4 py-2 cursor-pointer"
            onClick={props.onCancel} >Cancel</button>
        </div>

        <button className="bg-red-500 rounded-md px-4 py-2 cursor-pointer"
          onClick={props.onDelete} >Delete</button>
      </div>
    </div>
  );
}