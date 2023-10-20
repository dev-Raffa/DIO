import { DioAccount } from "./DioAccount"

export class DreamAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (value: number): void => {
    if(this.validateStatus() && value > 0){
      this.setBalance(value + 10, 'deposit') ;
    }else if (this.validateStatus() && value <= 0){
      throw new Error('Deposite um valor maior que R$ 0,00!')
    }
  }
}