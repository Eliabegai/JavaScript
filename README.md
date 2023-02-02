# JavaScript
 Estudando sobre JavaScript

npm install -g eslint -> install, se tiver algum erro de sintax no código, vai destacar

'null' → não recebe nada

typeoff → para saber o tipo da variável (number, object, string, function...)

parseInt ou ParseFloat para converter à número inteiro ou real

para colocar o valor escrito em valor Real pt-BR, pode ser utilizado o código:
    n1.toLocaleString('pt-BR', { style: "currency", currency: 'BRL' })

---------- Operadores ----------


    [x] Aritméticos
        → (soma) => 5 + 2 = 7 
        → (subtação) => 5 - 2 = 3 
        → (multiplicação) => 5 * 2 = 10 
        → (divisão) => 5 / 2 = 2.5 
        → (resto da divisão inteira) => 5 % 2 = 1 
        → (potência) => 5 ** 2 = 25

        [x] Precedencias
            → ()
            → **
            → * | / | %
            → + | -
        
    [x] Atribuição
        → var a, b, c, ...
        → var soma = 5 + 3 => 8
        → var resto = soma % 5 => 3
        → var potencia = 5 * resto ** 2 => 45
        → var divisao = 10 - soma / 2 => 6
        → var multip = 6 * 2 / divisao => 2
            como é p mesmo nível de precedência, é considerado a ordem da esquerda para direita
        → var total = resto % multip + 4 / multip => 3

        [x] Auto-atribuições
            → var n = 3
                n = n + 4
                n = n - 5
                n = n * 4
                n = n / 2
                n = n ** 2
                n = n % 5
                [x] Simplificando
                    n += 4
                    n -= 5
                    n *= 4
                    n /= 2
                    n **= 2
                    n %= 5
        [x] Incremento
            [x] Pós Incremento (onde precisar chamar a var novamnete  para aparecer o novo número)
            → var x = 5
                x ++ => mesma coisa de x += 1
                x -- => mesma coisa de x -= 1
            [x] Pré Incremento (já mostra o novo número)
                ++ x => mesma coisa de x += 1
                -- x => mesma coisa de x -= 1

    [ ] Relacionais
    [ ] Lógicos
    [ ] Ternário

---------- DOM ----------
  Document Object Model

Install in VSCode
    - Live Server

Árvore DOM
    window
        > location
        > document (father)
            > html (children)
                > head (parent)
                    > meta
                    > title
                > body (parent)
                    > h1
                        > strong
                    > p
                        > strong
                    > div
        > history

    Pode selecionar por
        - Marca
            - getElementByTagName()
        - ID
        - Nome
        - Classe
        - Seletor (css)