'use client';
import Page from "@/app/components/template/Page";
import TitleItem from "@/app/components/template/Title";
import ListUser from "@/app/components/user/ListUser";
import UserForm from "@/app/components/user/UserForm";
import useUser from "@/app/data/hooks/useUser";
import { IconPlus, IconUser } from "@tabler/icons-react"; 

export default function UserView() { 
    

    
    const { users, user, error, saveUser, deleteUser, alterUser } = useUser();

   

    return (
        <Page className="flex flex-col gap-10">
            <TitleItem icon={IconUser} primary="Workers" secondary="Register Worker" />

            {user ? (
                <UserForm
                    onChange={alterUser}
                    onSave={saveUser}
                    onDelete={deleteUser}
                    onCancel={() => alterUser(null)}
                    user={user}
                    error={error}
                />
            ) : (
                <div>
                    <div className="flex justify-end py-2">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2 rounded-md px-4 py-2" onClick={() => alterUser({})}>
                            <IconPlus size={20} />
                            <span>Adicionar</span>
                        </button>
                    </div>
                    <ListUser users={users} onClick={alterUser} />
                </div>
            )}
        </Page>
    );
}
