let myAccount = {
    name: 'Alan Anaya',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount){
    account.expenses += amount
}

let addIncome = function (account, amount) {
    account.income += amount
}

let resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
}

let getAccountSummary = function (account) {
    let total = account.income - account.expenses
    return `Account for ${account.name} has $${total}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 1000)
addExpense(myAccount, 30)
addExpense(myAccount, 560)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))