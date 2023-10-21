import { userDto } from "../user";

export interface accountDto extends userDto {
  id: string;
  password: string;
  balance: number
}