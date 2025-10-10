saldo = 0
extrato = ""
LIMITE_SAQUE = 500

while True:
    opcao = input("""
[d] Depositar
[s] Sacar
[e] Extrato
[q] Sair
=> """)

    if opcao == "d":
        valor = float(input("Informe o valor do depósito: R$ "))
        
        if valor > 0:
            saldo += valor
            extrato += f"Depósito: R$ +{valor:.2f}\n"
            print("Depósito realizado com sucesso!")
        else:
            print("Valor inválido. Tente novamente.")

    elif opcao == "s":
        valor = float(input("Informe o valor do saque: R$ "))

        if valor > saldo:
            print("Operação falhou! Saldo insuficiente.")
        elif valor > LIMITE_SAQUE:
            print(f"Operação falhou! O limite máximo por saque é de R$ {LIMITE_SAQUE:.2f}.")
        elif valor > 0:
            saldo -= valor
            extrato += f"Saque:    R$ -{valor:.2f}\n"
            print("Saque realizado com sucesso!")
        else:
            print("Valor inválido. Tente novamente.")

    elif opcao == "e":
        print("\n----------- EXTRATO -----------")
        print("Não houveram movimentações." if not extrato else extrato)
        print(f"\nSaldo Atual: R$ {saldo:.2f}")
        print("-------------------------------")

    elif opcao == "q":
        print("Obrigado por usar nosso sistema!")
        break

    else:
        print("Opção inválida, por favor, selecione uma opção do menu.")