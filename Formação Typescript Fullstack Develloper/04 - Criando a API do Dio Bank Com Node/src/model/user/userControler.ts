import { Request, Response, response } from "express";
import { User } from "./user.model";
import { userService } from "./userService.model";

export interface userController {
    service: userService
    createUser: (req: Request, resp: Response) => Promise<Response>
    getAllUsers: (req: Request, resp: Response) => Promise<Response<Array<User>>>
    deleteUser: (req: Request, resp: Response) => Promise<Response> 
}