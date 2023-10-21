import { User } from "./user.model";

export interface userService {
    readonly repository: Array<User>
    createUser: (name: string, email: string)=> Promise<void>
    getAllUsers: ()=> Promise<Array<User>>
    deleteUser: (email:string)=> Promise<void>
}