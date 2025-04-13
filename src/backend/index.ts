import deleteUser from "./User/deleteUser";
import getAllUser from "./User/getAll";
import getById from "./User/getById";
import saveUser from "./User/saveUser";

 // Pather Facade
export default class Backend {
    
    static readonly users = {
        save:saveUser,
        getAll:getAllUser,
        delete: deleteUser,
        getById: getById,
    }
}