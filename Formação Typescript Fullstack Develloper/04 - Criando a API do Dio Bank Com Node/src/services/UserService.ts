import { dbUser } from "../db/users"
import { User } from "../model/user/user.model";
import { userService } from "../model/user/userService.model";


export class UserService implements userService {
    repository: User[];

    constructor(){
        this.repository = dbUser
    }

    createUser = async (name: string, email: string) => {        
        this.repository.push({name: name, email: email})
        console.log('DB atualizado')
    }

    getAllUsers = async () => {
        return this.repository
    }

    deleteUser = async (email: string) => {
        const user = this.repository.findIndex((user)=> user.email == email)
        this.repository.splice(user,1)
        console.log('usuário deletado')
    }
}

