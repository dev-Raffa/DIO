import { CompanyAccount } from './class/CompanyAccount'
import { DreamAccount } from './class/DreamAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(100)
peopleAccount.getBalance()
peopleAccount.getName()
peopleAccount.withdraw(50)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(150)
companyAccount.getBalance()
companyAccount.getLoan(2000)
companyAccount.getName()
companyAccount.withdraw(1350)
console.log(companyAccount)

const dreamAccount: DreamAccount = new DreamAccount('Raffa', 35)
dreamAccount.deposit(200)
dreamAccount.getBalance()
dreamAccount.getName()
dreamAccount.withdraw(50)
console.log(dreamAccount)