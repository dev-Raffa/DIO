import { dbUser } from "../db/users";
import { User } from "../model/user/user.model";
import { userService } from "../model/user/userService.model";
import { UserService } from "./UserService";

describe('UserService', () => {
    const mockConsole = jest.spyOn(global.console, 'log')
    let service:userService;
    
    beforeEach(()=>{
        service = new UserService()
        
        expect(service).toBeDefined()
    })

    describe('createUser',()=>{
        const mockUser:User ={
            name:'nath',
            email:'nath@test.com'
        }

        it('Deve adicionar um novo usuário', async () => {
           await service.createUser(mockUser.name, mockUser.email);

            expect(mockConsole).toHaveBeenCalledWith('DB atualizado')
            expect(dbUser).toContainEqual(mockUser)
        })
    })

    describe('getAllUsers',()=>{
        it('Deve retornar uma lista de usuários',async () => {
            const response = await service.getAllUsers()
            expect(response).toEqual(dbUser)
        })
    })

    describe('deleteUser',()=>{
        it('Deve excluir o usuário', async()=>{
            const userMock:User = dbUser[0]

            await service.deleteUser(userMock.email)

            expect(dbUser).not.toContainEqual(userMock)
            expect(mockConsole).toHaveBeenCalledWith('usuário deletado')
        })
    })
})
