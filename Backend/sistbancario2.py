class Cliente:
    def __init__(self, nome, cpf):
        self.nome = nome
        self.cpf = cpf

class Conta:
    def __init__(self, cliente):
        self.cliente = cliente
        self.saldo = 0

    def depositar(self, valor):
        self.saldo += valor
        print(f"Depósito de R${valor:.2f} realizado.")

    def sacar(self, valor):
        if valor <= self.saldo:
            self.saldo -= valor
            print(f"Saque de R${valor:.2f} realizado.")
        else:
            print("Saldo insuficiente.")

    def mostrar_saldo(self):
        print(f"Saldo atual: R${self.saldo:.2f}")
