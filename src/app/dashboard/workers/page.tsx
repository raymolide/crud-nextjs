
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import UserView from "@/app/components/user/userView";
import { IconAlertTriangle, IconShield } from "@tabler/icons-react";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function PageUser() {

    const session = await getServerSession(authOptions)


    if (session?.user.role === "USER") {
        return <div className="flex min-h-screen items-center justify-center bg-gray-900 px-4">
        <div className="w-full max-w-md">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100">
              <IconShield className="h-8 w-8 text-rose-500" />
            </div>
            <h1 className="text-2xl font-bold text-white">Área de Acesso Restrito</h1>
            <p className="mt-2 text-sm text-white/70">
              Esta área é protegida e requer autenticação especial
            </p>
          </div>
      
          <div className="mb-6 rounded-lg bg-amber-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <IconAlertTriangle className="h-5 w-5 text-amber-500" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-amber-700">
                  Atenção: Todas as atividades nesta área são monitoradas e registradas por motivos de segurança.
                </p>
              </div>
            </div>
          </div>
      
          <div className="text-center">
            <Link
              href="/dashboard/users"
              className="inline-block rounded-lg bg-rose-600 px-6 py-2 text-white shadow hover:bg-rose-700 transition duration-200"
            >
              Voltar
            </Link>
          </div>
        </div>
      </div>
      
    } 

    return <UserView />
}
