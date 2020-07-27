const account = {
    name: 'Alan Anaya',
    expenses: [],
    income: [],
    AddExpense(description, amount) {
        this.expenses.push({description: description, amount: amount})
    },
    addIncome(description, amount) {
        this.income.push({description: description, amount: amount})
    },
    getAccountSummary() {
        let totalExpenses = 0, totalIncome = 0, balance = 0
        this.expenses.forEach(expense => totalExpenses += expense.amount)
        this.income.forEach(income => totalIncome += income.amount)
        balance = totalIncome - totalExpenses

        return `${this.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses`
    }

}
// 1. Challenge
// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> Alan Anaya has $1234 in expenses

// 2. Challenge
// 1. add income array to account
// 2. addIncome method -> description, amount
// 3. Tweak getAccountSummary

// Alan Anaya has a balance of $10. $100 in income. $90 in expenses

account.AddExpense('Rent', 950)
account.AddExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())




