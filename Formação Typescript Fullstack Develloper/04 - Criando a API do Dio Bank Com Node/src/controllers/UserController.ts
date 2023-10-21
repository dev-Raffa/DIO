import { Request, Response } from 'express'
import { UserService } from '../services/UserService'
import { userController } from '../model/user/userControler'
import { userService } from '../model/user/userService.model'
import { User } from '../model/user/user.model'


export class UserController implements userController {
    service: userService

    constructor() {
        this.service = new UserService()
    }

    createUser = async (request: Request, response: Response) => {
        const user:User = request.body

        if(!user.name){
            return response.status(400).json({ message: 'Bad request! Name obrigatório'})
        }else if(!user.email){
            return response.status(400).json({ message: 'Bad request! Email obrigatório'})
        }

        this.service.createUser(user.name, user.email)
        return response.status(201).json({ message: 'Usuário criado'})
    }

    getAllUsers = async (request: Request, response: Response<Array<User>>) => {
        const users = await this.service.getAllUsers()
        return response.status(200).json( users )
    }

    deleteUser = async (req: Request, response: Response) => {
        const user: {email:string} =  req.body

        if(!user.email){
            return response.status(400).json({message: 'Bad request! Email obrigatório'})
        }

        const users = await this.service.deleteUser(user.email)

        return response.status(200).json(users)
    }
}
