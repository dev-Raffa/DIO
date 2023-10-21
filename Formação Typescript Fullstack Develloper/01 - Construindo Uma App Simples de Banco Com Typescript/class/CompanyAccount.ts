import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if(this.validateStatus() && value > 0) {
      this.deposit(value)
    }else if (this.validateStatus() && value <=0){
      throw new Error('O valor do empréstimo deve ser maior que 0')
    }
  }
}
