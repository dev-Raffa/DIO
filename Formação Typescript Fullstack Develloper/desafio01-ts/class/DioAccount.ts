export class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus() && value > 0){
      this.setBalance(value, 'deposit')
    }else if (this.validateStatus() && value <= 0){
      throw new Error('Deposite um valor maior que R$ 0,00!')
    }
  }

  withdraw = (value:number): void => {
    if(this.validateStatus() && value <= this.balance){
      this.setBalance(value,'withdraw')
    }else if (this.validateStatus() && value > this.balance){
      throw new Error('Saldo insuficiente')
    } 
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected setBalance = (value: number, action: 'deposit'| 'withdraw'): void => {
    if(action.toLowerCase() === 'deposit'){
      this.balance += value
    }else if (action.toLowerCase() ==='withdraw'){
      this.balance -= value
    }
  } 

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta inválida')
  }
}
