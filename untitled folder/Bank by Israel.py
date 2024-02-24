class BankAccount:
    def __init__(self, account_number, customer_name, opening_date, initial_balance):
        self.account_number = account_number
        self.customer_name = customer_name
        self.opening_date = opening_date
        self.balance = initial_balance

    def deposit(self, amount):
        self.balance += amount
        return amount

    def withdraw(self, amount):
        if self.balance < amount:
            return "Insufficient balance"
        else:
            self.balance -= amount
            return amount

    def check_balance(self):
        print("Current balance:", self.balance)

    def customer_details(self):
        print("Customer Name:", self.customer_name)
        print("Account Number:", self.account_number)
        print("Date of Account Opening:", self.opening_date)
        print("Balance:", self.balance)


# Example usage:
account1 = BankAccount("123456789", "John Doe", "2024-02-24", 1000)
print("Deposit:", account1.deposit(500))
print("Withdraw:", account1.withdraw(200))
account1.check_balance()
account1.customer_details()
