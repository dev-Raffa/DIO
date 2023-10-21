import { UserController } from "./UserController";
import { Request } from 'express'
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { userController } from "../model/user/userControler";
import { dbUser } from "../db/users";



describe('UserController', () => {
    let controler:userController
    const mockResponse = makeMockResponse()
    const MockDbUser = dbUser

    beforeEach(()=>{
        controler =  new UserController()

        expect(controler).toBeDefined()
    })


    describe('createUser',()=>{
        const mockRequest = {
            body: {
                name: '',
                email: ''
            }
        } as Request

        it('Deve retornar Badrequest se o name não estiver definido', async()=>{
            controler.createUser(mockRequest, mockResponse)

            expect(mockResponse.state.status).toBe(400)
            expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Name obrigatório' })
        })

        it('Deve retornar Badrequest se o email não estiver definido', async()=>{
            mockRequest.body.name= 'nath'

            controler.createUser(mockRequest, mockResponse)

            expect(mockResponse.state.status).toBe(400)
            expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Email obrigatório' })
        })

        it('Deve adicionar um novo usuário', () => {
            mockRequest.body.email= 'nath@test.com'

            controler.createUser(mockRequest, mockResponse)

            expect(mockResponse.state.status).toBe(201)
            expect(mockResponse.state.json).toMatchObject({ message: 'Usuário criado' })
        })
    })

    describe('getAllUsers', ()=>{
        const mockRequest = {} as Request

        it('deve retornar a lista de usuários', async()=>{
            await controler.getAllUsers(mockRequest, mockResponse)

            expect(mockResponse.state.status).toBe(200)
            expect(mockResponse.state.json).toEqual(dbUser)

        })
    })

    describe('deleteUser',()=>{
        const mockRequest = {
            body: {
                email: ''
            }
        } as Request

        it('deve retornar um bad request se o email não for informado', async()=>{
            await controler.deleteUser(mockRequest, mockResponse)

            expect(mockResponse.state.status).toBe(400)
            expect(dbUser).toEqual(MockDbUser)
        })


        it('deve remover o usuário e retornar a lista de usuários atualizada', async () => {
            mockRequest.body.email='joana@dio.com'

            await controler.deleteUser(mockRequest, mockResponse)

            expect(mockResponse.state.status).toBe(200)
            expect(mockResponse.state.json).not.toEqual(MockDbUser)
        })
    })
})
